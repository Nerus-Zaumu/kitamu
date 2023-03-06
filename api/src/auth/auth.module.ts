import { PrismaService } from './../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { SupabaseService } from './auth.supabase';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  providers: [AuthService, SupabaseService, ConfigService, PrismaService],
})
export class AuthModule {}
