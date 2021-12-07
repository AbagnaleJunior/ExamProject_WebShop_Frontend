import { Injectable } from '@angular/core';
import { Things } from "../../shared/models/things";
import {Tag} from "../../shared/models/tag";

@Injectable({
  providedIn: 'root'
})
export class BorrowedItemService {

  constructor() { }

  getItemById(id:number): Things {
    return this.getAll().find(item => item.id == id)!;
  }

  getAllItemsBySearchTerm(searchTerm:string): Things[] {
    return this.getAll().filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  }

  getAllTags():Tag[] {
    return [
      {name: 'All', amount: 16},
      {name: 'Electronics', amount: 5},
      {name: 'Vehicle', amount: 2},
      {name: 'Transport', amount: 2},
      {name: 'Car', amount: 1},
      {name: 'Gardening', amount: 2},
      {name: 'Phones', amount: 1},
      {name: 'Communication', amount: 1},
      {name: 'Camping', amount: 1},
      {name: 'Nature', amount: 1}
    ]

  }

  getAllItemsByTag(tag: string): Things[] {
    return tag == "All"?
      this.getAll() :
      this.getAll().filter(item => item.tags?.includes(tag));
  }

  getAll():Things[]{
    return [
      {
        id:1,
        name:'Electric Scooter',
        price: 125,
        tags: ['Electronics', 'Transport', 'Vehicle'],
        stars: 4.2,
        imageUrl: '/assets/Images/elløbehjul.jpg'
      },
      {
        id:2,
        name:'Future Car',
        price: 1700,
        tags: ['Car', 'Transport', 'Vehicle'],
        stars: 4.8,
        imageUrl: '/assets/Images/futurecar.jpg'
      },
      {
        id:3,
        name:'Hedge clipper',
        price: 100,
        tags: ['Electronics', 'Gardening'],
        stars: 3.9,
        imageUrl: '/assets/Images/hækkeklipper.jpg'
      },
      {
        id:4,
        name:'Lawnmower',
        price: 135,
        tags: ['Electronics', 'Gardening'],
        stars: 3.8,
        imageUrl: '/assets/Images/plæneklipper.jpg'
      },
      {
        id:5,
        name:'Samsung Galaxy S21',
        price: 250,
        tags: ['Electronics', 'Phones', 'Communication'],
        stars: 4.5,
        imageUrl: '/assets/Images/samsungs21.jpg'
      },
      {
        id:6,
        name:'Chainsaw',
        price: 150,
        tags: ['Electronics', 'Gardening'],
        stars: 3.5,
        imageUrl: '/assets/Images/motorsav.jpg'
      },
      {
        id:7,
        name:'Tent',
        price: 250,
        tags: ['Camping', 'Nature'],
        stars: 4.8,
        imageUrl: '/assets/Images/telt.jpg'
      },

    ]
  }


}
