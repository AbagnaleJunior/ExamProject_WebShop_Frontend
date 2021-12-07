import { Component, OnInit } from '@angular/core';
import { BorrowedItemService } from "../services/borrowedstuff/borrowedItem.service";
import { Things } from "../shared/models/things";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items:Things[] = [];
  constructor(private borrowedItemService:BorrowedItemService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.searchTerm)
        this.items = this.borrowedItemService.getAllItemsBySearchTerm(params.searchTerm);
      else if (params.tag)
        this.items = this.borrowedItemService.getAllItemsByTag(params.tag);
      else
        this.items = this.borrowedItemService.getAll();
    })


  }

}
