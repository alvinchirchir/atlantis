import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggingInterceptor } from './logging.interceptor';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [  PrometheusModule.register(),
  ],
  controllers: [AppController],
  providers: [AppService,{
    provide: APP_INTERCEPTOR,
    useClass: LoggingInterceptor,
  }],
 

})
export class AppModule {}
