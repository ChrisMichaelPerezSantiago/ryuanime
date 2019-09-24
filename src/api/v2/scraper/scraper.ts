import * as cheerio from 'cheerio';
import * as puppeteer from 'puppeteer';
import fetch from 'node-fetch';
import { url, searchUrl, searchUrlLetter, calenderUrl , genderUrl , moviesUrl , ovasUrl } from '../../urls/index'
import IAnime from '../../interfaces/IAnime';
import ICalender from '../../interfaces/ICalender';
import getAnimeCalender from './calendar';

const axios = require('axios');


const getAllAnimeVideos = async (id: string) => {
  const res = await fetch(`${url}/${id}`);
  const body = await res.text();
  const promises = [];
  const videos = []
  const $ = cheerio.load(body);
  $('div#container').each(function (index, element) {
    const $element = $(element);
    const eps = $element.find('div.serie-info div.info-content div.info-field span.info-value').eq(2).text();
    const videos = Array.from({length: Number(eps) }, async(v , k) => {
      return{
        episode: k + 1,
        video: await getAnimeVideo(id , k + 1)
      }
    });    
    promises.push({videos})
  })
  return new Promise((resolve , reject) =>{
    setTimeout(() => {
      resolve(promises) 
    }, 2000);
  })
}

(async() =>{
  await getAllAnimeVideos('tokyo-ghoul')
    .then(doc =>{
      doc[0].videos.map(x =>{
        x.then(y =>{
          console.log(y)
        })
      })
    })
})()



/****
 * @author w3cj
 * @type contributor
 * @description The getAnimeVideo function with cheerio was reimplemented 
 ***/
function btoa(str: { toString: () => string; }) {
  var buffer: Buffer;

  if (str instanceof Buffer) {
    buffer = str;
  } else {
    buffer = Buffer.from(str.toString(), 'binary');
  }

  return buffer.toString('base64');
}

// The script we execute below depends on the btoa function to exist
(global as any).btoa = btoa;


async function getAnimeVideo(id: any, chapter: any) {
  const { data } = await axios.get(`${url}/${id}/${chapter}`);
  const $ = cheerio.load(data);
  const scripts = $('script');
  for (let i = 0; i < scripts.length; i++) {
    const $script = $(scripts[i]);
    const contents = $script.html();
    // There is a script on the page that will load the iframe dynamically
    // Here we find the script and then request the iframe URL directly
    if ((contents || '').includes('var video = [];')) {
      const videoPageURL = contents.split('video[1] = \'<iframe class="player_conte" src="')[1].split('"')[0];
      return getVideoURL(videoPageURL);
    }
  }
}

async function getVideoURL(url: string) {
  // This requests the underlying iframe page
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const video = $('video');
  if (video.length) {
    // Sometimes the video is directly embedded
    const src = $(video).find('source').attr('src');
    return src;
  } else {
    // If the video is not embedded, there is obfuscated code that will create a video element
    // Here we run the code to get the underlying video url
    const scripts = $('script');
    // The obfuscated code uses a variable called l which is the window / global object
    const l = global;
    // The obfuscated code uses a variable called ll which is String
    const ll = String;
    const $script2 = $(scripts[1]).html();
    // Kind of dangerous, but the code is very obfuscated so its hard to tell how it decrypts the URL
    eval($script2);
    // The code above sets a variable called ss that is the mp4 URL
    return (l as any).ss;
  }
}

export{
  getAllAnimeVideos
}