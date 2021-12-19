import { Injectable } from '@angular/core';
import { BorrowedItem } from "../shared/models/borrowedItem";
import { Tag } from "../shared/models/tag";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class BorrowedItemService {
/*
  readonly baseProductsUrl = 'api/Products';
  readonly baseProductCategoryUrl = 'api/ProductCategory';
*/

  constructor(private http: HttpClient) { }

  getItemById(id:number): BorrowedItem {
    return this.getAll().find(item => item.id == id)!;
  }

  getAllItemsBySearchTerm(searchTerm:string): BorrowedItem[] {
    return this.getAll().filter(item =>
      item.productName?.toLowerCase().includes(searchTerm.toLowerCase()));

  }

  /*
    formData: BorrowedItem = new BorrowedItem();
    list!: BorrowedItem[];

    postProducts() {
      return this.http.post(this.baseProductsUrl, this.formData)
    }

    refreshList() {
      this.http.get(this.baseProductsUrl)
        .subscribe(res => this.list = res as BorrowedItem[])
    }
  */

/*
  getAllTags():Promise<Tag[]> {

    return fetch(this.baseProductCategoryUrl)
      .then(response => response.json())
      .then(data => {

        // let tags:Tag[] = data;
        // return tags
        return <Tag[]> data;

      });

*/



  getAllTags(): Tag[] {
    return [
      {name: 'All', amount: 14},
      {name: 'Electronics', amount: 4},
      {name: 'Vehicle', amount: 2},
      {name: 'Transport', amount: 2},
      {name: 'Car', amount: 1},
      {name: 'Gardening', amount: 3},
      {name: 'Camping', amount: 1},
      {name: 'Nature', amount: 1}
    ]
  }

  getAllItemsByTag(tag: string): BorrowedItem[] {
    return tag == "All"?
      this.getAll() :
      this.getAll().filter(item => item.tags?.includes(tag));
  }




  getAll(): BorrowedItem[]{
    return [
      {
        id:1,
        productName:'Electric Scooter',
        price: 125,
        tags: ['Electronics', 'Transport', 'Vehicle'],
        imageUrl: '/assets/Images/elløbehjul.jpg',
        ownerName: 'Jørgen Hansen',
        ownerPhoneNumber: 12345678,
        description: ''
      },
      {
        id:2,
        productName:'Future Car',
        price: 1700,
        tags: ['Car', 'Transport', 'Vehicle'],
        imageUrl: '/assets/Images/futurecar.jpg',
        ownerName: 'Jørgen Hansen',
        ownerPhoneNumber: 12345678,
        description: ''
      },
      {
        id:3,
        productName:'Hedge clipper',
        price: 100,
        tags: ['Electronics', 'Gardening'],
        imageUrl: '/assets/Images/hækkeklipper.jpg',
        ownerName: 'Jørgen Hansen',
        ownerPhoneNumber: 12345678,
        description: ''
      },
      {
        id:4,
        productName:'Lawnmower',
        price: 135,
        tags: ['Electronics', 'Gardening'],
        imageUrl: '/assets/Images/plæneklipper.jpg',
        ownerName: 'Jørgen Hansen',
        ownerPhoneNumber: 12345678,
        description: ''
      },
      {
        id:6,
        productName:'Chainsaw',
        price: 150,
        tags: ['Electronics', 'Gardening'],
        imageUrl: '/assets/Images/motorsav.jpg',
        ownerName: 'Jørgen Hansen',
        ownerPhoneNumber: 12345678,
        description: ''
      },
      {
        id:7,
        productName:'Tent',
        price: 250,
        tags: ['Camping', 'Nature'],
        imageUrl: '/assets/Images/telt.jpg',
        ownerName: 'Jørgen Hansen',
        ownerPhoneNumber: 12345678,
        description: ''

      },

    ]
  }


}
