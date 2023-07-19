// src/models/User.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  password: string;
  email: string;
  firstName?: string;
  username?: string;
}

export interface IUserObject {
  _id?: IUser['_id'];
  password: IUser['password'];
  email: IUser['email'];
  firstName?: IUser['firstName'];
  username?: IUser['username'];
}

const userSchema = new Schema(
  {
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: String,
    firstName: String,
  },
  { timestamps: true },
);

export const UserModel = mongoose.model<IUser>('User', userSchema);
