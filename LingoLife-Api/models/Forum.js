import mongoose from "mongoose"; 

const { Schema } = mongoose;

const ForumSchema = new Schema({
    title:{
        type: String,
        required:true
    },
    content:{
        type: String,
        required: true,
    },
    fileSrc :{
       type:String,
       required : false ,
    },
    language: {
        type: String,
        required: true
    }

},
    { timestamps: true } 
);

const Forum = mongoose.model("Service",ForumSchema);

export { Forum, ForumSchema};