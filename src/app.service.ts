import { Injectable } from '@nestjs/common';
import { UserDocument, User } from './user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

  async CreateUser(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async readUser(): Promise<User[]> {
    try {
      return await this.userModel.find().exec(); 
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error; 
    }
  }

  async updateUser(id,data):Promise<User|null>{
    return this.userModel.findByIdAndUpdate(id,data,{new:true}).exec();
  }

  async deleteUser(id){
    return this.userModel.findOneAndDelete(id)
  }



}
