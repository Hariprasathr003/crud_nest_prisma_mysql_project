import { Injectable } from '@nestjs/common';
 // Assuming you have a PrismaService for dependency injection
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async findAll() {
      return this.prisma.user.findMany();
    }

  async findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id: Number(id) } }); // Convert id to number
  }

  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id: Number(id) }, // Convert id to number
      data: updateUserDto,
    });
  }

  async delete(id: number) {
    return this.prisma.user.delete({ where: { id: Number(id) } }); // Convert id to number
  }
}
