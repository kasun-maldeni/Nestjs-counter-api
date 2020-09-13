import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CounterController } from './counter/counter.controller';
import { CounterService } from './counter/counter.service';

@Module({
  imports: [],
  controllers: [AppController, CounterController],
  providers: [AppService, CounterService],
})
export class AppModule { }
