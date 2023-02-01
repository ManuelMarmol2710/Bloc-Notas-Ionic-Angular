import {model,Schema, Document} from "mongoose";

export interface Collect extends Document{
    collections: string;

    
    }


const userSchema = new Schema({

collections:{


type:String,
unique:true,
required: true,
lowercase: true,
trim: true,


}


});


userSchema.pre<Collect>('save', async function(next){
})
export default model<Collect>('Collections', userSchema);
