import * as scraper from './scraper';
import * as express from 'express';
const router = express.Router();


router.get('/search/:title', (req: express.Request, res: express.Response) => {
  const title: string = req.params.title;
  scraper.searchAnime(title)
    .then(animes => {
      res.json({
        animes
      });
    });
});

router.get('/anime/:id/:chapter', (req: express.Request, res: express.Response) => {
  const id: string = req.params.id;
  const chapter: number = req.params.chapter;
  scraper.getAnimeVideo(id, chapter)
    .then(video => {
      res.json({
        video
      });
    });
});

router.get('/letter/:letter/:page', (req: express.Request, res: express.Response) => {
  const letter: string = req.params.letter.toUpperCase();
  const page: number = req.params.page;
  scraper.getAnimesListByLetter(letter , page)
    .then(animes => {
      res.json({
        animes
      });
    });
});


export default router;