import { Body, Controller, Delete, Get,Param,Post,Put } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.model';
import { UserUpdateDto } from 'src/userUpdate.dto';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}


@Post()
async createUser(@Body() userDto:User){
  return this.appService.CreateUser(userDto)
}

@Get()
readUser(){
  return this.appService.readUser()
}


@Put(':id')
async updateUser(
  @Param('id') id: string, 
  @Body() updateData: UserUpdateDto
): Promise<User | null> { // Ensure correct return type
  return this.appService.updateUser(id, updateData);
}


@Delete(':id')
async deleteUser(@Param('id') id:string){
  return this.appService.deleteUser(id)
}


}

