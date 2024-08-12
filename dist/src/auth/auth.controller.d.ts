import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    username: any;
    constructor(authService: AuthService);
    login(createUserDto: CreateUserDto): Promise<{
        access_token: string;
    }>;
}
