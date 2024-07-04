import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/singup-dto';
import { LoginDto } from './dto/login-dto'; 

@Controller('tasktrackerbackend-production-01f5.up.railway.app/auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    async signUp(@Body() signUpDto: SignUpDto): Promise<void> {
        await this.authService.signUp(signUpDto);
        // No need to return anything specific from signup method in controller
    }

    @Post('login')
    async login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
        return await this.authService.login(loginDto);
    }
}
