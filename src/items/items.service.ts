import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/items.interfaces';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: "123456",
            name: "first item",
            description: "this is 1st icon",
            qty: 500
        },
        {
            id: "654321",
            name: "second item",
            description: "this is 2nd icon",
            qty: 400
        },
    ];

    findAll(): Item[] {
        return this.items;
    }

    findOne(id: string): Item {
        return this.items.find(item => item.id === id)
    }
}
