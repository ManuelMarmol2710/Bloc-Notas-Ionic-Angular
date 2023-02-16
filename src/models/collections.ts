import { model, Schema, Document } from "mongoose";

export interface Collect extends Document {
  collections: string;
  owner: string;
}

const userSchema = new Schema({
  collections: {
    type: String,
  },
  owner: {
    type: String,
    require: true,
  },
});

userSchema.pre<Collect>("save", async function (next) {});
export default model<Collect>("BDcollection", userSchema);
