import * as scraper from '../scraper';
import * as express from 'express';
const router = express.Router();


router.get('/search/:title', (req: express.Request, res: express.Response) => {
  scraper.searchAnime(req.params.title)
    .then(animes => {
      res.json({
        animes
      });
    });
});

router.get('/anime/:id/:chapter', (req: express.Request, res: express.Response) => {
  let id = req.params.id;
  let chapter = req.params.chapter;
  scraper.getAnimeVideo(id, chapter)
    .then(anime => {
      res.json({
        anime
      });
    });
});

export default router;