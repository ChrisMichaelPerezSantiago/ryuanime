import * as V1_API from './v1/scraper/scraper';
import * as express from 'express';
const router = express.Router();


router.get('/search/:title', (req: express.Request, res: express.Response) => {
  const title: string = req.params.title;
  V1_API.searchAnime(title)
    .then(animes => {
      res.status(200).json({
        animes
      });
    }).catch((err) =>{
      console.log(err)
    });
});

router.get('/anime/:id/:chapter', (req: express.Request, res: express.Response) => {
  const id: string = req.params.id;
  const chapter: number = req.params.chapter;
  V1_API.getAnimeVideo(id, chapter)
    .then(video => {
      res.status(200).json({
        video
      });
    }).catch((err) =>{
      console.log(err)
    });
});

router.get('/letter/:letter/:page', (req: express.Request, res: express.Response) => {
  const letter: string = req.params.letter.toUpperCase();
  const page: number = req.params.page;
  V1_API.getAnimesListByLetter(letter , page)
    .then(animes => {
      res.status(200).json({
        animes
      });
    }).catch((err) =>{
      console.log(err);
    });
});


router.get('/latest', (req: express.Request, res: express.Response) => {
  V1_API.lastAnimesAdded()
    .then(animes => {
      res.status(200).json({
        animes
      });
    }).then((err) =>{
      console.log(err)
    });
});

router.get('/calender' , (req: express.Request , res: express.Response) =>{
  V1_API.getAnimeCalender()
    .then(calender =>{
      res.status(200).json({
        calender
      })
    });
});


router.get('/genders/:gender/:page' , (req: express.Request , res: express.Response) =>{
  let gender: string = req.params.gender.toLowerCase();
  let page: number = req.params.page;
  V1_API.getAnimesByGender(gender , page)
    .then(animes =>{
      res.status(200).json({
        animes
      });
    });
});

router.get('/movies/:page' , (req: express.Request , res: express.Response) =>{
  let page: number = req.params.page;
  V1_API.getAnimeMovies(page)
    .then(movies =>{
      res.status(200).json({
        movies
      });
    });
});

router.get('/ovas/:page' , (req: express.Request , res: express.Response) =>{
  let page: number = req.params.page;
  V1_API.getAnimeOvas(page)
    .then(ovas =>{
      res.status(200).json({
        ovas
      });
    });
});




export default router;