import { StoreDto } from './dto/store-auth.dto';
import { PrismaService } from './../prisma/prisma.service';
import { SupabaseService } from './auth.supabase';
import { HttpStatus, Injectable } from '@nestjs/common';
import { AccountDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { generateRandomPassword } from 'utils/random-password.util';

@Injectable()
export class AuthService {
  constructor(
    private readonly supabaseService: SupabaseService,
    private readonly prismaService: PrismaService,
  ) {}

  //Start of Supabase Auth for customer

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

  async forgotPassword(email: string) {
    const { error } =
      await this.supabaseService.supabase.auth.resetPasswordForEmail(email);
    if (error) {
      return {
        type: error.name,
        error: error.message,
        status: error.status,
      };
    }
    return {
      success: true,
      message: 'Password reset link sent to your email',
    };
  }

  async resetPassword(resetPasswordDto: UpdateAuthDto) {
    const { data, error } = await this.supabaseService.supabase.auth.updateUser(
      {
        password: resetPasswordDto.password,
      },
    );
    if (error) {
      return {
        type: error.name,
        error: error.message,
        status: error.status,
      };
    }
    return {
      success: true,
      message: 'Password reset successful',
    };
  }

  //End of Supabase Auth for customer

  //Start of Supabase Auth for store
  async applyForStore(storeDto: Omit<StoreDto, 'password'>) {
    const apply = await this.prismaService.store_application.create({
      data: {
        ...storeDto,
      },
    });

    if (!apply) {
      return {
        success: false,
        message: 'Error applying for store',
      };
    }
    return {
      success: true,
      message:
        'Store application successful. You will receive feedback as soon as your application is approved',
    };
  }

  async approveStore(storeDto: StoreDto) {
    const randomPassword = generateRandomPassword(storeDto.name);
    const { data, error } = await this.supabaseService.supabase.auth.signUp({
      email: storeDto.email,
      password: randomPassword,
    });
    if (error) {
      return {
        type: error.name,
        error: error.message,
        status: error.status,
      };
    }
    const updateRole = await this.prismaService.account.upsert({
      where: { id: data.user.id },
      update: { role: 'STORE' },
      create: { id: data.user.id, role: 'STORE' },
    });
    if (!updateRole) {
      return {
        success: false,
        message: 'Could not update user role',
      };
    }
    return {
      success: true,
      message:
        'Account created successfully. Confirm the email sent to your account to start using it.',
    };
  }
}
