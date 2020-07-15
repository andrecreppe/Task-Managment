import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),

    JwtModule.register({
      secret: 'topSecret51', //change to a more elaborated secret
      signOptions: {
        expiresIn: 3600, //seconds
      }
    }),
    
    TypeOrmModule.forRoot(typeOrmConfig),

    TasksModule,
    AuthModule
  ],
})

export class AppModule {}
