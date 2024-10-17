import mongoose from "mongoose"; 

const { Schema } = mongoose;

const ForumSchema = new Schema({
    Title:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required: true,
    },
    filmeSrc :{
       type:String,
       required :true ,
    }
},
    { timestamps: true } 
);

const Forum = mongoose.model("Service",ForumSchema);

export { Forum, ForumSchema};