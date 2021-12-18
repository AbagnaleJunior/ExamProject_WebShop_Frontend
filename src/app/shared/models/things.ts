export interface Things {

  id?: number;
  ownerFirstName:string;
  ownerLastName:string;
  ownerPhoneNumber:number;
  productName:string;
  price:number;
  tags?:string[];
  imageUrl:string;
  description:string;
}
