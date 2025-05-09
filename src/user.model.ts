import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop()
  description: string;

  @Prop({ default: Date.now })
  date_added: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
