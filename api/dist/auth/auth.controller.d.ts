import { AuthService } from './auth.service';
import { AccountDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    createCustomer(clientPayload: AccountDto): Promise<{
        type: string;
        error: string;
        status: number;
        success?: undefined;
        message?: undefined;
    } | {
        success: boolean;
        message: string;
        type?: undefined;
        error?: undefined;
        status?: undefined;
    }>;
    confirmSignup(confirmation_url: string, baseUrl: AccountDto): Promise<void>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAuthDto: UpdateAuthDto): string;
    remove(id: string): string;
}
