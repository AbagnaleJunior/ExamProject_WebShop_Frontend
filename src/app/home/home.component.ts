import { Component, OnInit } from '@angular/core';
import { BorrowedItemService } from "../services/borrowedItem.service";
import { BorrowedItem } from "../shared/models/borrowedItem";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items:BorrowedItem[] = [];
  userName: any;
  constructor(private borrowedItemService:BorrowedItemService,
              private route:ActivatedRoute) { }

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
