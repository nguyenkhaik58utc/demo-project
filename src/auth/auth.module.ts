import { Module } from '@nestjs/common';
import {AuthController} from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
    imports: [
        PrismaModule,
        HttpModule
    ],
    controllers: [
        AuthController
    ], 
    providers: [
        AuthService
    ]
})
export class AuthModule {}
