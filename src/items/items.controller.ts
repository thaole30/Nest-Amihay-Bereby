import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateItemDio } from './dto/create-item-dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/items.interfaces';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemService: ItemsService){}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Item> {
    return this.itemService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDio): string {
    return `Create a new item, name- ${createItemDto.name} , name- ${createItemDto.description}, qty- ${createItemDto.qty}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateItemDto: CreateItemDio) {
    return `This action updates a #${id} item`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} item`;
  }
}
