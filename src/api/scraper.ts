import * as cheerio from 'cheerio';
import * as jsdom from 'jsdom';
import fetch from 'node-fetch';
import { url, searchUrl, searchUrlLetter } from './urls/index'
import IAnime from './interfaces/IAnime'

const { JSDOM } = jsdom;

const getAnimesListByLetter = async (letter: string) => {
  const res = await fetch(`${searchUrlLetter}${letter}`);
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

// from devtool
//document.querySelector("iframe.player_conte").contentDocument.body.querySelector("source").src

const getAnimeVideo = async (id: string, chapter: number) => {
  const res = await fetch(`${url}${id}/${chapter}/`);
  const body = await res.text();
  //const options = {
  //  resources: 'usable',
  //  runScripts: 'dangerously',
  //};
  //JSDOM.fromFile(body , options).then((dom) =>{
  //  console.log("info => " , dom.window.document.body.querySelector('iframe.player_conte').textContent.trim());
  //}).catch((err) => console.log(err))
  //const content = [];
  //const $ = cheerio.load(body);
  //const dom = new JSDOM(body);
  //const video = dom.window.document.querySelector("iframe")
  //$(video).each(function(index , element){
  //  const $element = $(element).attr('src')
  //  const source = {
  //    video: $element
  //  };
  //  content.push(source);
  //});
  //console.log("content => " , content);
  //return {body};
  //const $ = cheerio.load(body);
  //$('div#container').each((index , element) =>{
  //  const $element = $(element).text();
  //  const iframe = $('iframe').attr('src')
  //  const $$ = cheerio.load(iframe);
  //  $$('iframe.player_conte').each((i , e) =>{
  //    const $$element = $$(e).text();
  //    console.log($$element);
  //  })
  //})
  //const options = {
  //  resources: 'usable',
  //  runScripts: 'dangerously',
  //};
  //JSDOM.fromFile(body, options).then((dom) => {
  //  const $ = cheerio.load(body);
  //  let iframe = dom.window.document.body.querySelector('iframe').textContent.trim();
  //    $(`${iframe}`).each(function (index, element) {
  //      const $element = $(element);
  //      const x = $element.find('#player_conte source').attr('src')
  //      console.log(x);
  //    })
  //})
  //const $ = cheerio.load(body);
  //const arr = []
  //let x = $('iframe').contents().find('html').html();
  //console.log(x)
  //
  //$('iframe').each((index, element) => {
  //  const $element = $(element);
  //  const x = $element.attr('src');
  //  //console.log(x);
  //  arr.push(x);
  //});
  //return {}; 
}

export {
  searchAnime,
  getAnimeVideo,
  getAnimesListByLetter
};