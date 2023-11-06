import fs from "fs";
import satori from "satori";
import sharp from "sharp";
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_METADATA } from '@/consts';

import puppeteer from 'puppeteer-core';
import chromium from 'chrome-aws-lambda';

export const GET: APIRoute = async function GET({ params, request }) {
  const localchrome = '/usr/bin/google-chrome-stable';
  const executable = fs.existsSync(localchrome) ? localchrome : chromium.executablePath;

  const browser = await puppeteer.launch({
    executablePath: executable,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
    defaultViewport: {
      width: 1200, height: 630
    }
  });

  const page = await browser.newPage();

  const content = await fs.readFileSync('./og-template.html').toString();

  await page.setContent(content,{
    waitUntil: 'domcontentloaded'
  });

  const png = (await page.screenshot());

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
    },
  });
}

export async function getStaticPaths() {
  const pages = [ SITE_METADATA.title , 'Tutorial', 'Kontak', 'Not Found', 'Topik']
  const tags = await getCollection('tags');
  const posts = await getCollection('blog');

  pages.push(...tags.map((tag) => tag.data.name));
  pages.push(...posts.map((post) => post.data.title));


  return [...new Set(pages)].map((page) => ({
    params: {
      title: page
    },
  }));
}
