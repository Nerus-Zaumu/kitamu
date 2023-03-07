import { PrismaService } from './../prisma/prisma.service';
import { SupabaseService } from './auth.supabase';
import { AccountDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
export declare class AuthService {
    private readonly supabaseService;
    private readonly prismaService;
    constructor(supabaseService: SupabaseService, prismaService: PrismaService);
    createClientAccount(clientDto: AccountDto): Promise<{
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
    loginClientAccount(clientDto: AccountDto): Promise<{
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
    logoutClientAccount(): Promise<{
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
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAuthDto: UpdateAuthDto): string;
    remove(id: number): string;
}
