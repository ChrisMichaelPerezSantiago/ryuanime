<h1 align="center">Welcome to ryuanime 👋</h1>
<p>
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/npm-%3E%3D5.5.0-blue.svg" />
  <img src="https://img.shields.io/badge/node-%3E%3D9.3.0-blue.svg" />
  <a href="https://github.com/ChrisMichaelPerezSantiago/ryuanime#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/ChrisMichaelPerezSantiago/ryuanime/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/ChrisMichaelPerezSantiago/ryuanime/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
  <a href="https://twitter.com/Chris5855M">
    <img alt="Twitter: Chris5855M" src="https://img.shields.io/twitter/follow/Chris5855M.svg?style=social" target="_blank" />
  </a>
</p>

*A free anime streaming , using the jkanime content by scraping the jkanime website.*<img alt="ryuanime" src="./assets/img/logo.png">

## How will the project work?

This project will be completely a desktop version. For this `Electron` will be used, a framework developed by GitHub which allows us to develop `multiplatform systems` based on `web technologies`, and maybe it will have its web version, but everything will depend on the development flow.

### 👷🚧In construction 
*I must say that as the days go by the project can undergo great changes. That is why I ask for your patience, to which the documentation is updated.*

- [ ] Frontend - *the vuejs framework will be used SOON!*
- [x] Backend - *in process*
- [x] Scraping jkanime web page - *in process* 
- [x] Good Documentation - *in process*
- [ ] Tests - *SOON!*

## Branches
- [x] master branch - *in use*
## Prerequisites

- `npm` &gt;=5.5.0
- `node` &gt;=9.3.0

## Install

```sh
npm install
```

## Usage

```sh
npm run dev
```

## Packages
*These are the packages that I have taken more advantage for the project.*
- `cheerio` Fast, flexible & lean implementation of core jQuery designed specifically for the server.
- `puppeteer` Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.
- `express` Fast, unopinionated, minimalist web framework for node.
- `compose-middleware` Compose an array of middleware into a single function for use in Express, Connect, router, etc.

## Request & Response Examples
*It may be that changes are made in the future in the `parameterization structure.`*

### GET /anime/[id]/[chapter]
| id          | chapter         |
| ----------- | --------------- |
| anime title | episode number  |

```json
// 20190619164418
// http://localhost:3000/api/v1/anime/tokyo-ghoul/1
{
  "video": [
    "https://storage.googleapis.com/markesito.appspot.com/tokgho/01.mp4"
  ]
}
```

### GET /search/[title] 
- *For now only returns the titles of the first page of jkanime `10 title per pages`*
- *The `extra` key is empty, but it is supposed to contain the mp4 of each episode. It will be added soon.*

| title       |
| ----------- |
| anime title |

```json
// 20190619165728
// http://localhost:3000/api/v1/search/tokyo

{
  "animes": [
    [
      {
        "title": "Tokyo Ghoul",
        "id": "tokyo-ghoul",
        "poster": "https://cdn.jkanime.net/assets/images/animes/image/tokyo-ghoul.jpg",
        "type": "Serie / 12 Eps",
        "extra": "...",
        "synopsis": "En Tokyo ocurren asesinatos misteriosos cometidos por Ghouls, seres desconocidos que comen carne humana, un día Kaneki Ken un joven de 18 años que cursa la Universidad conoce a una chica en un restaurante y la invita a salir, pero luego se da cuenta que ella es un Ghoul y sufre un ataque de parte…"
      }
    ],
    .......
  ]
}
```

### GET /letter/[a-z]/[page]
- *The `extra` key is empty, but it is supposed to contain the mp4 of each episode. It will be added soon.*
- *Returns a list of `20 titles` per N pages*

| a-z         | page            |
| ----------- | --------------- |
| list of animes that the title begin with a letter [a-z]| actual page|

```json
// 20190619171717
// http://localhost:3000/api/v1/letter/a/1

{
  "animes": [
    [
      {
        "title": "Abarenbou Kishi!! Matsutarou",
        "id": "abarenbou-kishi-matsutarou",
        "poster": "https://cdn.jkanime.net/assets/images/animes/image/abarenbou-kishi-matsutarou.jpg",
        "type": "Serie / 23 Eps",
        "extra": {...},
        "synopsis": "Matsutarou Sakaguchi es un hombre matón gigante con fuerza mucho más allá de la gente común. Él nunca pronunció palabras como \"trabajar duro\", \"luchar\" y \"sueño\" como el típico protagonista del manga shonen. Sin embargo, él es más fuerte que nadie y sin igual en la lucha de sumo. Su mayor…"
      }
    ],
    .......
  ]
}
```

## Middleware
*As the project grows, more functions will be implemented soon.*

| Function    | Info           |
| ----------- | --------------- |
| requestLoggerMiddleware | <li>req.method</li><li>req.originalUrl</li><li>req.statusCode</li> |
| errorHandler            | <li>err.message</li><li>err.stack</li> |
| notFound                | <li>Error - req.originalUrl</li>

## Author

👤 **Chris Michael**

* Twitter: [@Chris5855M](https://twitter.com/Chris5855M)
* Github: [@ChrisMichaelPerezSantiago](https://github.com/ChrisMichaelPerezSantiago)

## ❤️ Contributors
 If you are interested in contributing to this project, you can contact me at my email, and I will gladly respond to the messages.

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [Chris Michael](https://github.com/ChrisMichaelPerezSantiago).<br />
This project is [MIT](https://github.com/ChrisMichaelPerezSantiago/ryuanime/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
