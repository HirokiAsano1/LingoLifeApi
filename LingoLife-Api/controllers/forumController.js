import { Forum } from "../models/Forum.js";

const forumController = {

    crate: async(req,res) =>{
        try{
            const forum = {
                Title: req.body.Title,
                description : req.body.description
            };

            const response = await Forum.create(forum);
            res.status(201).json({response, msg: "Publicação Postada no Forum!" });
        }
        catch(error)
        {
            console.log(error)
        }

    },
};

export default forumController;