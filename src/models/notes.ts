import mongoose, {model,Schema, Document} from "mongoose";


export interface bloc_User extends Document{

    title:string,
    notes: string,
   owner:string,
}

const notesSchema = new Schema({

    title:{
        
        type: String,
        require:true,

    },

    notes:{
        
        type: String,
        require:true,

    },

      owner:{
        type:mongoose.Types.ObjectId,
        require:true,


    },


},{
    versionKey:false


})
notesSchema.pre<bloc_User>('save', async function(next){
});

export default model<bloc_User>('blocNotes', notesSchema);