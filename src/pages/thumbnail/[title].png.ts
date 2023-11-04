import fs from "fs/promises";
import satori from "satori";
import sharp from "sharp";
import type { APIRoute } from 'astro';
import {getCollection} from 'astro:content';

export const get: APIRoute = async function get({ params, request }) {
  const robotoData = await fs.readFile("./src/assets/Roboto-Regular.ttf");

  const title = params.title.replace(/-/g, ' ').toUpperCase();

  const svg = await satori(
    {
      type: "h1",
      props: {
        children: title,
        style: {
          fontWeight: "bold"
        }
      }
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Roboto",
          data: robotoData,
          weight: "normal",
          style: "normal",
        },
      ],
    }
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
    },
  });
}

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { title: post.data.title.replace(/ /g, '-').toLowerCase() },
  }));
}
