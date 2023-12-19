import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from "@nestjs/common";
import * as argon from 'argon2'
import { AuthDTO } from './dto';
import { contains } from 'class-validator';
@Injectable({})
export class AuthService{
    constructor(private prismaService:PrismaService){

    }
    async register(authDTO: AuthDTO){
        try {
            const hash = await argon.hash(authDTO.password);
            const user = await this.prismaService.user.create({
                data : {
                    email: authDTO.email,
                    hashedPassword: hash,
                    firstName: "test",
                    lastName: "123"
                },
                select:{
                    id: true,
                    createdAt: true
                }
            })
            return {
                message: user
            }
        } catch (error) {
            return {
                message: error.message
            }
        }
    }

    async getListUser(){
        try {
            return await this.prismaService.user.findMany({
                select:{
                    id: true,
                    lastName: true,
                    firstName: true,
                    email: true,
                    createdAt: true
                }
            })
        } catch (error) {
            return error.message
        }
    }

    async getUser(email: string, name: string){
        var data = {
            id : 0,
            email: "",
            name: ""
        }
        try {
            var user = await this.prismaService.user.findUnique({
                select:{
                    id: true,
                    email: true,
                    firstName: true,
                    lastName: true
                },
                where:{
                        email: "test@fpt.com"
                }
            });
            if(user){
                data.id = user.id;
                data.email = user.email;
                data.name = `${user.firstName} ${user.lastName}`;
            }
            return {
                data: data,
                message: "success"
            }
        } catch (error) {
            return {
                data: data,
                message: error.message
            }
        }
    }

    login(){
        return {
            message: "login"
        }
    }
}