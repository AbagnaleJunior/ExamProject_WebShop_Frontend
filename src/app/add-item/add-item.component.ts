import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Things} from "../shared/models/things";
import {BorrowedItemService} from "../services/borrowedItem.service";
import { Tag } from "../shared/models/tag"
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PostingData} from "../shared/models/postingData";
import {PostingService} from "../services/posting.service";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

 // @ViewChild('Form') addPostForm!: NgForm;
  addPostForm:any = FormGroup;
  postingData: PostingData = {};

  constructor(private http:HttpClient,
              private borrowedItemService: BorrowedItemService,
              private fb: FormBuilder,
              private postingService: PostingService,
              private router: Router) { }

  ngOnInit(): void {
    this.createAddPostItemForm();
  }
/*
  postView = {
    imageUrl: "",
    productName: "",
    id: 0,
    ownerFirstName: "",
    ownerLastName: "",
    ownerPhoneNumber: 0,
    price: 0,
    tags: [],
    description: ""
  }

*/

  selectedFile = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(event);
  }

  onUpload() {

/*  add this when Frederik has Api ready. https://www.youtube.com/watch?v=YkvqLNcJz3Y&t=1s
    this.http.post('');
  */
  }


  createAddPostItemForm() {
    this.addPostForm = this.fb.group({
      ownerFirstName: [null, Validators.required],
      ownerLastName: [null, Validators.required],
      ownerPhoneNumber: [null, Validators.required],
      price: [null, Validators.required],
      tags: [null, Validators.required],
      description: [null, Validators.required],
      productName: [null, Validators.required]
    })
  }

  get ownerFirstName() {
    return this.addPostForm.get('ownerFirstName') as FormControl;
  }
  get ownerLastName() {
    return this.addPostForm.get('ownerLastName') as FormControl;
  }
  get ownerPhoneNumber() {
    return this.addPostForm.get('ownerPhoneNumber') as FormControl;
  }
  get price() {
    return this.addPostForm.get('price') as FormControl;
  }
  get tags() {
    return this.addPostForm.get('tags') as FormControl;
  }
  get id() {
    return this.addPostForm.get('id') as FormControl;
  }
  get productName() {
    return this.addPostForm.get('productName') as FormControl;
  }
  get imageUrl() {
    return this.addPostForm.get('imageUrl') as FormControl;
  }
  get description() {
    return this.addPostForm.get('description') as FormControl;
  }

  postData(): PostingData {
    return this.postingData = {
      ownerFirstName: this.ownerFirstName.value,
      ownerLastName: this.ownerLastName.value,
      ownerPhoneNumber: this.ownerPhoneNumber.value,
      price: this.price.value,
      tags: this.tags.value,
      description: this.description.value,
      productName: this.productName.value
    }
  }

  onSubmit() {
    console.log(this.addPostForm.value);
    this.postingService.addPost(this.postData());
  }

  redirectToFrontPage() {
    this.router.navigateByUrl('/front-page')
  }

}
