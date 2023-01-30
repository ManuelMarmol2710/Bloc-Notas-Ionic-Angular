import {model,Schema, Document} from "mongoose";


export interface bloc_User extends Document{

    title:string,
    notes: string,
    collections: string,
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

    collections:{

        type: String,
        require:true,
        unique:true,

    }


})
notesSchema.pre<bloc_User>('save', async function(next){
});

export default model<bloc_User>('blocNotes', notesSchema);