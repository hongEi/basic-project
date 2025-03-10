import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginDto } from './dto/login.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  getTest(): string {
    return 'This is a test endpoint!';
  }

  @Post('/login')
  login(@Body() body: LoginDto): { message: string } {
    console.log('Login attempt:', { id: body.id, pw: body.pw });
    if (body.id === 'admin' && body.pw === '1234') {
      return { message: 'Login successful' };
    }
    return { message: 'Login failed' };
  }
}
