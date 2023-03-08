import { StoreDto } from './dto/store-auth.dto';
import { Controller, Post, Body, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AccountDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  createCustomer(@Body() clientPayload: AccountDto) {
    return this.authService.createClientAccount(clientPayload);
  }

  @Post('login')
  login(@Body() payload: AccountDto) {
    return this.authService.loginClientAccount(payload);
  }

  @Post('logout')
  logout() {
    return this.authService.logoutClientAccount();
  }

  @Post('apply/store')
  applyForStore(@Body() application: Omit<StoreDto, 'password'>) {
    return this.authService.applyForStore(application);
  }

  @Post('apply/approve')
  approveApplication(@Body() application: StoreDto) {
    return this.authService.approveStore(application);
  }

  @Post('password/forgot')
  forgotPass(@Body('email') email: string) {
    return this.authService.forgotPassword(email);
  }

  @Put('password/reset')
  resetPass(@Body() payload: UpdateAuthDto) {
    return this.authService.resetPassword(payload);
  }
  // jcrL(ZcVhDK)eG
}
