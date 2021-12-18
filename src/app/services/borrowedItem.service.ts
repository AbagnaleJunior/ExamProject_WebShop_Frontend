import { Injectable } from '@angular/core';
import { Things } from "../shared/models/things";
import {Tag} from "../shared/models/tag";
import { TagsComponent } from '../tags/tags.component';
import { HttpClientModule } from '@angular/common/http';


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
      item.productName.toLowerCase().includes(searchTerm.toLowerCase()));

  }

    getAllTags():Promise<Tag[]> {


    return fetch('api/ProductCategory')
    .then(response => response.json())
    .then(data => {

      // let tags:Tag[] = data;
      // return tags
      return <Tag[]> data;

    });

    // return [
    //   {name: 'All', amount: 14},
    //   {name: 'Electronics', amount: 4},
    //   {name: 'Vehicle', amount: 2},
    //   {name: 'Transport', amount: 2},
    //   {name: 'Car', amount: 1},
    //   {name: 'Gardening', amount: 3},
    //   {name: 'Phones', amount: 0},
    //   {name: 'Communication', amount: 0},
    //   {name: 'Camping', amount: 1},
    //   {name: 'Nature', amount: 1}
    // ]

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
        productName:'Electric Scooter',
        price: 125,
        tags: ['Electronics', 'Transport', 'Vehicle'],
        imageUrl: '/assets/Images/elløbehjul.jpg',
        ownerName: 'Jørgen Hansen',
        ownerPhoneNumber: '12345678'
      },
      {
        id:2,
        productName:'Future Car',
        price: 1700,
        tags: ['Car', 'Transport', 'Vehicle'],
        imageUrl: '/assets/Images/futurecar.jpg',
        ownerName: 'Jørgen Hansen',
        ownerPhoneNumber: '12345678'
      },
      {
        id:3,
        productName:'Hedge clipper',
        price: 100,
        tags: ['Electronics', 'Gardening'],
        imageUrl: '/assets/Images/hækkeklipper.jpg',
        ownerName: 'Jørgen Hansen',
        ownerPhoneNumber: '12345678'
      },
      {
        id:4,
        productName:'Lawnmower',
        price: 135,
        tags: ['Electronics', 'Gardening'],
        imageUrl: '/assets/Images/plæneklipper.jpg',
        ownerName: 'Jørgen Hansen',
        ownerPhoneNumber: '12345678'
      },
      {
        id:6,
        productName:'Chainsaw',
        price: 150,
        tags: ['Electronics', 'Gardening'],
        imageUrl: '/assets/Images/motorsav.jpg',
        ownerName: 'Jørgen Hansen',
        ownerPhoneNumber: '12345678'
      },
      {
        id:7,
        productName:'Tent',
        price: 250,
        tags: ['Camping', 'Nature'],
        imageUrl: '/assets/Images/telt.jpg',
        ownerName: 'Jørgen Hansen',
        ownerPhoneNumber: '12345678'

      },

    ]
  }


}
