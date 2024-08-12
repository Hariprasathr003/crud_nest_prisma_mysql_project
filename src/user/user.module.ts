import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import {  UserController } from './user.controller';
import { PrismaService } from 'prisma/prisma.service';
  
@Module({
  imports: [],
  providers: [UserService, PrismaService],
  controllers: [UserController],
  exports: [UserService], // Export UserService so it can be used in other modules
})
export class UserModule {}
