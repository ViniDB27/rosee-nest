import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    ParseIntPipe,
  } from '@nestjs/common';
import { OrderService } from './order.service';

  
  @Controller('orders')
  export class OrderController {
    constructor(private readonly service: OrderService) {}
  
    @Post()
    async creat(@Body() body: CreateOrderDto) {
      return this.service.create(body);
    }
  
    @Get()
    async list() {
      return this.service.list();
    }
  
    @Get(':id')
    async show(@Param('id', ParseIntPipe) id: number) {
      return this.service.show(id);
    }
  }
  