import { PrismaService } from './../prisma/prisma.service';
import { SupabaseService } from './auth.supabase';
import { HttpStatus, Injectable } from '@nestjs/common';
import { AccountDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly supabaseService: SupabaseService,
    private readonly prismaService: PrismaService,
  ) {}

  async createClientAccount(clientDto: AccountDto) {
    const { data, error } = await this.supabaseService.supabase.auth.signUp({
      email: clientDto.email,
      password: clientDto.password,
    });
    if (error) {
      return {
        type: error.name,
        error: error.message,
        status: error.status,
      };
    }
    return {
      success: true,
      message: 'Confirmation link sent to your email',
    };
  }

  async loginClientAccount(clientDto: AccountDto) {
    const { data, error } =
      await this.supabaseService.supabase.auth.signInWithPassword({
        email: clientDto.email,
        password: clientDto.password,
      });
    if (error) {
      return {
        type: error.name,
        error: error.message,
        status: error.status,
      };
    }
    return {
      success: true,
      message: 'Login successful',
      session: data.session,
    };
  }

  async logoutClientAccount() {
    const logout = await this.supabaseService.supabase.auth.signOut();
    if (logout.error) {
      return {
        type: logout.error.name,
        error: logout.error.message,
        status: logout.error.status,
      };
    }
    return {
      success: true,
      message: 'Logout successful',
    };
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
