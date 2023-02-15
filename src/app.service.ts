import { Injectable } from '@nestjs/common';
import * as fibonacci from 'fibonacci';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  getHi(): string {
    return 'Hi Ree!';
  }

  getFibonacci(): number {
    return fibonacci.iterate(process.env.FIBONACCI || 3000);
  }
}
