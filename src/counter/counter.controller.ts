import { Controller, Get, Patch } from '@nestjs/common';
import { CounterService } from './counter.service';

@Controller('counter')
export class CounterController {
  constructor(private readonly counterService: CounterService) { }

  @Get()
  getCounter(): Promise<{ value: number; }> {
    return this.counterService.getCounter();
  }

  @Patch('increment')
  incrementCounter(): Promise<{ value: number; }> {
    return this.counterService.incrementCounter();
  }

  @Patch('decrement')
  decrementCounter(): Promise<{ value: number; }> {
    return this.counterService.decrementCounter();
  }
}
