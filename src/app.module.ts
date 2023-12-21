import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';
import { PrismaModule } from './prisma/prisma.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    AuthModule, 
    UserModule, 
    NoteModule, 
    PrismaModule
  ],
})
export class AppModule {}
