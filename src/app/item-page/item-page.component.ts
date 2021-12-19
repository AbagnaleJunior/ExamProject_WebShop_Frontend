import { Component, OnInit } from '@angular/core';
import {BorrowedItem} from "../shared/models/borrowedItem";
import {ActivatedRoute} from "@angular/router";
import {BorrowedItemService} from "../services/borrowedItem.service";

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit {

  item!: BorrowedItem;
  constructor(private activatedRoute:ActivatedRoute,
              private borrowedItemService: BorrowedItemService) {

    activatedRoute.params.subscribe((params) => {
      if (params.id)
        this.item = borrowedItemService.getItemById(params.id);
      })
    }

  ngOnInit(): void {
  }

}
