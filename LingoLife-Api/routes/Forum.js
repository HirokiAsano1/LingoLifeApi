import  express  from 'express';
const router = express.Router();

import forumController from '../controllers/ForumController.js'

router.route("/create").post((req, res) => forumController.crate(req,res));

router.route("/all").get((req,res) => forumController.getAll(req,res));

export default router; 