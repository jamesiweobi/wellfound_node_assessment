import { IUser, UserModel } from "../models/user.model";
import BaseRepo from "./baseRepo";

class UserRepo extends BaseRepo<IUser> {
  constructor() {
    super(UserModel);
  }
}

export default UserRepo;
