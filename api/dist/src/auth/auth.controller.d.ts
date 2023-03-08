import { StoreDto } from './dto/store-auth.dto';
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
    login(payload: AccountDto): Promise<{
        type: string;
        error: string;
        status: number;
        success?: undefined;
        message?: undefined;
        session?: undefined;
    } | {
        success: boolean;
        message: string;
        session: import("@supabase/supabase-js").AuthSession;
        type?: undefined;
        error?: undefined;
        status?: undefined;
    }>;
    logout(): Promise<{
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
    applyForStore(application: Omit<StoreDto, 'password'>): Promise<{
        success: boolean;
        message: string;
    }>;
    approveApplication(application: StoreDto): Promise<{
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
    forgotPass(email: string): Promise<{
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
    resetPass(payload: UpdateAuthDto): Promise<{
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
}
