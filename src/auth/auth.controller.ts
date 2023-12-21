import { AuthService } from './auth.service';
import { Controller, Post, Req, Body, Get, Param, Query } from '@nestjs/common';
import { AuthDTO } from './dto';
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Post("register")
  async register(@Body() request: AuthDTO){
      return await this.authService.register(request)
  }

  @Post("get-list-user")
  async getListUser(){
    return await this.authService.getListUser()
  }

  @Get("get-user")
  async getUser(
    @Query("email") email: string,
    @Query("name") name: string
  ){
    return await this.authService.getUser(email, name)
  }
  
  @Get("test-call-api")
  async callAPi(){
    return await this.authService.callApi();
  }
  @Post("add-product")
  async addProduct(){
    return await this.authService.addProduct();
  }

  @Post("login")
  login(){
      return this.authService.login()
  }
}
