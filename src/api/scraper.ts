import * as cheerio from 'cheerio';
import * as puppeteer from 'puppeteer';
import * as jsdom from 'jsdom';
import fetch from 'node-fetch';
import { url, searchUrl, searchUrlLetter } from './urls/index'
import IAnime from './interfaces/IAnime'


const { JSDOM } = jsdom;

const getAnimesListByLetter = async (letter: string, page: number) => {
  const res = await fetch(`${searchUrlLetter}${letter}/${page}`);
  const body = await res.text();
  const animes = [];
  const $ = cheerio.load(body);
  $('.portada-box').each(function (index, element) {
    const $element = $(element);
    const title = $element.find('h2.portada-title a').attr('title');
    const synopsis = $element.find('div #ainfo p').text();
    const type = $element.find('span.eps-num').text();
    const id = $element.find('a.let-link').attr('href').split('/')[3];
    const poster = $element.find('a').children('img').attr('src');
    const extra = getAnimeVideo(id, undefined);
    const anime: IAnime[] = [{
      title: title,
      id: id,
      poster: poster,
      type: type,
      extra: extra,
      synopsis: synopsis,
    }]
    animes.push(anime);
  });
  return animes;
}

const searchAnime = async (query: any) => {
  const res = await fetch(`${searchUrl}${query}/1/`);
  const body = await res.text();
  const animes = [];
  const $ = cheerio.load(body);
  $('.portada-box').each(function (index, element) {
    const $element = $(element);
    const title = $element.find('h2.portada-title a').attr('title');
    const synopsis = $element.find('div #ainfo p').text();
    const type = $element.find('span.eps-num').text();
    const id = $element.find('a.let-link').attr('href').split('/')[3];
    const poster = $element.find('a').children('img').attr('src');
    //const extra = getAnimeVideo(id, undefined);
    //console.log(extra);
    const anime: IAnime[] = [{
      title: title,
      id: id,
      poster: poster,
      type: type,
      extra: 'extra',
      synopsis: synopsis,
    }]
    animes.push(anime);
  });
  return animes;
}


const getAnimeVideo = async (id: string, chapter: number) => {
  const BASE_URL = `${url}${id}/${chapter}/`;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(BASE_URL);
  const elementHandle = await page.$('.player_conte');
  const frame = await elementHandle.contentFrame();
  const video = await frame.$eval('#jkvideo_html5_api', el =>
    Array.from(el.getElementsByTagName('source')).map(e => e.getAttribute("src")));
  return video;
}


// Testing Testing Asynchronous Code
(async () => {
  const T = await getAnimeVideo('tokyo-magnitude-80', 1)
    .then(async (data) => {
      return await data;
    })
  console.log(T)
})()


export {
  searchAnime,
  getAnimeVideo,
  getAnimesListByLetter
};