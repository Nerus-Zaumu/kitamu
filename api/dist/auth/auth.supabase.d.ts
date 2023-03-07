import { ConfigService } from '@nestjs/config';
export declare class SupabaseService {
    private configService;
    constructor(configService: ConfigService);
    readonly supabase: import("@supabase/supabase-js").SupabaseClient<any, "public", any>;
}
