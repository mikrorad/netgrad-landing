import fs from "fs/promises";
import satori from "satori";
import sharp from "sharp";
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE_METADATA } from '@/consts';

export async function GET({params, props}: APIContext) {

  const robotoData = await fs.readFile("./src/assets/InterBold.ttf");
    // const image = await fs.readFile("./src/assets/og-image.png");
    const myImageBase64 = (await fs.readFile("./src/assets/radiant-gradient.png")).toString("base64");
    const title = params.title;

    const content = props.content;

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
              children: content,
            },
          },
        ],
      },
    };

    const svg = await satori(
      html,
      {
        width: 1000,
        height: 600,
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

  interface Page {
    title: string;
    content: string;
  }

  const pages: Page[] = [
    {
      title: SITE_METADATA.title,
      content: 'Netgrad: Permudah Management Jaringanmu'
    },
    {
      title: 'Tutorial',
      content: 'Tutorial Jaringan dari Netgrad'
    },
    {
      title: 'Kontak',
      content: 'Kontak Netgrad'
    },
    {
      title: 'Not Found',
      content: 'Not Found'
    },
    {
      title: 'Topik',
      content: 'List Topik-Topik Tutorial Netgrad'
    }
  ];

  const tags = await getCollection('tags');
  const posts = await getCollection('blog');

  pages.push(...tags.map((tag) =>
    {

      // capitalize first letter and after space
      const content = tag.data.name.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));

      return {
        title: tag.slug,
        content: `Tutorial Jaringan dari Netgrad tentang ${content}`
      }
    }
    ));

  pages.push(...posts.map((post) =>
    {
      return {
        title: post.slug,
        content: post.data.title
      }
    }
    ));
  return [...new Set(pages)].map((page) => ({
    params: {
      title: page.title
    },
    props: {
      content: page.content
    }
  }));
}
