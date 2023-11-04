import fs from "fs/promises";
import satori from "satori";
import sharp from "sharp";
import type { APIRoute } from 'astro';
import {getCollection} from 'astro:content';

export const get: APIRoute = async function get({ params, request }) {
  const robotoData = await fs.readFile("./src/assets/InterBold.ttf");
  // const image = await fs.readFile("./src/assets/og-image.png");
  const myImageBase64 = (await fs.readFile("./src/assets/radiant-gradient.png")).toString("base64");
  const title = params.title.replace(/-/g, ' ').toUpperCase();

    const html = {
       type: "div",
       props: {
           style: {
           display: "flex",
           height: "100%",
           width: "100%",
           alignItems: "center",
           justifyContent: "center",
           letterSpacing: "-.02em",
           fontWeight: 700,
           backgroundImage: `url('data:image/png;base64,${myImageBase64}')`
           },
           children: [
           {
               type: "div",
               props: {
               style: {
                   left: 42,
                   top: 42,
                   position: "absolute",
                   display: "flex",
                   alignItems: "center",
               },
               children: [
                   {
                   type: "span",
                   props: {
                       style: {
                       width: 24,
                       height: 24,
                       background: "black",
                       },
                   },
                   },
                   {
                   type: "span",
                   props: {
                       style: {
                       marginLeft: 8,
                       fontSize: 20,
                       },
                       children: "netgrad.id",
                   },
                   },
               ],
               },
           },
           {
               type: "div",
               props: {
               style: {
                   display: "flex",
                   flexWrap: "wrap",
                   justifyContent: "center",
                   padding: "20px 50px",
                   margin: "0 42px",
                   fontSize: 40,
                   width: "auto",
                   maxWidth: 550,
                   textAlign: "center",
                   backgroundColor: "black",
                   color: "white",
                   lineHeight: 1.4,
               },
               children: title,
               },
           },
           ],
       },
    };

  const svg = await satori(
    html,
    {
      width: 1200,
      height: 550,
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

  return [...new Set(posts)].map((post) => ({
    params: {
      title: post.data.title.replace(/ /g, '-').toLowerCase()
    },
  }));
}
