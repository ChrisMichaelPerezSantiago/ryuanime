import * as scraper from './scraper';
import * as express from 'express';
const router = express.Router();


router.get('/search/:title', (req: express.Request, res: express.Response) => {
  const title: string = req.params.title;
  scraper.searchAnime(title)
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
  scraper.getAnimeVideo(id, chapter)
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
  scraper.getAnimesListByLetter(letter , page)
    .then(animes => {
      res.status(200).json({
        animes
      });
    }).catch((err) =>{
      console.log(err);
    });
});


router.get('/latest', (req: express.Request, res: express.Response) => {
  scraper.lastAnimesAdded()
    .then(animes => {
      res.status(200).json({
        animes
      });
    }).then((err) =>{
      console.log(err)
    });
});

router.get('/calender' , (req: express.Request , res: express.Response) =>{
  scraper.getAnimeCalender()
    .then(calender =>{
      res.status(200).json({
        calender
      })
    });
});


router.get('/genders/:gender/:page' , (req: express.Request , res: express.Response) =>{
  let gender: string = req.params.gender.toLowerCase();
  let page: number = req.params.page;
  scraper.getAnimesByGender(gender , page)
    .then(animes =>{
      res.status(200).json({
        animes
      })
    })
})



export default router;