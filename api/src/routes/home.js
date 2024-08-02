import {Router} from 'express';
import { getAllHouses } from '../controllers/houses-controller.js';

 export const router = Router();

router.route('/gethouses').get(getAllHouses);


