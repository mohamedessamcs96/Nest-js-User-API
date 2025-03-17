import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.model'; // Import your schema

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mhmd96essam:MHMD96.essam@cluster0.q8scr.mongodb.net/mydatabase?retryWrites=true&w=majority'
    ),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), // Use actual schema
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
