import { AuthService } from './auth.service';
import { Controller, Post, Req, Body } from '@nestjs/common';
import { AuthDTO } from './dto';
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {
  }
  @Post("register")
  async register(@Body() request: AuthDTO){
      console.log(request);
      return await this.authService.register(request)
  }
  @Post("login")
  login(){
      return this.authService.login()
  }
}
