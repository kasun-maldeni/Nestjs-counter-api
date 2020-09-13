import { Injectable } from '@nestjs/common';
import pool from '../db';

@Injectable()
export class CounterService {
  selectCounter() {
    return pool
      .query('SELECT * FROM counters')
      .then(dbRes => dbRes.rows[0].value);
  }

  updateCounter(newCounter) {
    return pool
      .query('UPDATE counters SET value = ' + newCounter + ' WHERE id = 1')
  }

  async getCounter() {
    const counter = await this.selectCounter()
    return { value: counter }
  }

  async incrementCounter() {
    const counter = await this.selectCounter()
    const newCounter = counter + 1
    this.updateCounter(newCounter)

    return { value: newCounter }
  }

  async decrementCounter() {
    const counter = await this.selectCounter()
    const newCounter = counter - 1
    this.updateCounter(newCounter)

    return { value: newCounter }
  }
}
