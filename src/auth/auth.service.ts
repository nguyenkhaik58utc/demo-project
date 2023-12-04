import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from "@nestjs/common";
import * as argon from 'argon2'
import { AuthDTO } from './dto';
@Injectable({})
export class AuthService{
    constructor(private prismaService:PrismaService){

    }
    register(authDTO: AuthDTO){
        const hash = argon.hash(authDTO.password);
        return {
            message: hash
        }
    }
    login(){
        return {
            message: "login"
        }
    }
}