import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  constructor(private configService: ConfigService) {}
  public readonly supabase = createClient(
    this.configService.get<string>('SUPABASE_URL'),
    this.configService.get<string>('SUPABASE_KEY'),
  );

  watchForAuthStateChanges(callback: (event: string, session: any) => void) {
    return this.supabase.auth.onAuthStateChange(callback);
  }
}
