import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UserService);
    getUsers(): Promise<{
        id: number;
        username: string;
        email: string | null;
        phonenumber: string;
    }[]>;
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
    getUser(id: number): Promise<{
        id: number;
        username: string;
        email: string | null;
        phonenumber: string;
    }>;
    deleteUser(id: number): Promise<{
        id: number;
        username: string;
        email: string | null;
        phonenumber: string;
    }>;
}
