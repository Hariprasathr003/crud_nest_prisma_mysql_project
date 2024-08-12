import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        username: string;
        email: string | null;
        phonenumber: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        username: string;
        email: string | null;
        phonenumber: string;
    }>;
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        username: string;
        email: string | null;
        phonenumber: string;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        username: string;
        email: string | null;
        phonenumber: string;
    }>;
    delete(id: number): Promise<{
        id: number;
        username: string;
        email: string | null;
        phonenumber: string;
    }>;
}
