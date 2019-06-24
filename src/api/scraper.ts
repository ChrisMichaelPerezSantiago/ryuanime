import * as cheerio from 'cheerio';
import * as puppeteer from 'puppeteer';
import fetch from 'node-fetch';
import { url, searchUrl, searchUrlLetter } from './urls/index'
import IAnime from './interfaces/IAnime'


const animeContentHandler = async (id: string) =>{
  const res = await fetch(`${url}/${id}`);
  const body = await res.text();
  const extra = [];
  const $ = cheerio.load(body);
  $('div.serie-info').each(async (index , element) =>{
    const $element = $(element);
    const sinopsis = $element.find('div.sinopsis-box p').text();
    const type = $element.find('div.info-content div.info-field span.info-value').first().text();
    const content = {
      type: type,
      sinopsis: sinopsis,
    }
    extra.push(content);
  })
  return await extra;
}

const lastAnimesAdded = async () =>{
  const res = await fetch(`${url}`);
  const body = await res.text();
  const animes = [];
  const $ = cheerio.load(body);
  $('.portada-box').each(async function (index, element) {
    const $element = $(element);
    const title = $element.find('h2.portada-title a').attr('title');
    //const synopsis = $element.find('div #ainfo p').text();
    //const type = $element.find('span.eps-num').text();
    const id = $element.find('h2.portada-title a').attr('href').split('/')[3];
    const poster = $element.find('a').children('img').attr('src');
    //const extra = getAnimeVideo(id, undefined);
    //const extra = await animeContentHandler(id)
    const anime: IAnime[] = [{
      title: title,
      id: id,
      poster: poster,
      type: 'unknown',
      synopsis: 'unknown'
    }]
    animes.push(anime);
  });
  return animes;
}

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
    const anime: IAnime[] = [{
      title: title,
      id: id,
      poster: poster,
      type: type,
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
  $('.portada-box').each(async function(index, element){
    const $element = $(element);
    const title = $element.find('h2.portada-title a').attr('title');
    const synopsis = $element.find('div #ainfo p').text();
    const type = $element.find('span.eps-num').text();
    const id = $element.find('a.let-link').attr('href').split('/')[3];
    const poster = $element.find('a').children('img').attr('src');
    const anime: IAnime[] = [{
      title: title,
      id: id,
      poster: poster,
      type: type,
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
  const elementHandle = await page.waitForSelector('iframe.player_conte');
  const frame = await elementHandle.contentFrame();
  const video = await frame.$eval('#jkvideo_html5_api', el =>
    Array.from(el.getElementsByTagName('source')).map(e => e.getAttribute("src")));
  await browser.close();
  return video;
}



// Video function helper!! Testing 
//async function getVideoHelper(id: string, chapter: number){
//  console.log('id: ' , id , 'chapater: ' , chapter);
//  try{
//    var T = await getAnimeVideo(id, chapter)
//    await delay();
//    return await JSON.stringify(T);
//  }catch(err){
//    return err;
//  }
//}
//
//(async function(){
//  var T = await getVideoHelper('tokyo-ghoul', 1)
//  console.log(T);
//})()
//
//function delay(){
//  return new Promise(function(resolve , reject){
//    setTimeout(function(){
//      resolve(42)
//    }, 5000)
//  });
//}

export {
  searchAnime,
  getAnimeVideo,
  getAnimesListByLetter,
  lastAnimesAdded,
};