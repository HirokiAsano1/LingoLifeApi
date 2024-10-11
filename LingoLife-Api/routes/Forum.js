import  express  from 'express';
const router = express.Router();

import forumController from '../controllers/ForumController.js'

router.route("/publication").post((req, res) => forumController.crate(req,res));

router.route("/publication").get((req,res) => forumController.getAll(req,res));

router.route("/publication/:id").get((req,res) => forumController.get(req,res));

router.route("/publication/:id").delete((req,res) => forumController.delete(req,res));

router.route("/publication/:id").put((req,res) => forumController.update(req,res));

export default router; 