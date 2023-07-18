// src/models/User.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  password: string;
  email: string;
}

export interface IUserCreate {
  password: string;
  email: string;
}

const userSchema = new Schema({
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
},
  { timestamps: true }
);

export const User = mongoose.model<IUser>('User', userSchema);
