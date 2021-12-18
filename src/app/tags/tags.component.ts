import {Component, Input, OnInit} from '@angular/core';
import {Tag} from "../shared/models/tag";
import {BorrowedItemService} from "../services/borrowedItem.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  @Input()
  itemPageTags?:string[];

  @Input()
  justifyContent:string = 'center';

  tags?: Tag[];


  constructor(private borrowedItemService:BorrowedItemService) { }

  ngOnInit(): void {
    if (!this.itemPageTags)
    // this.tags = this.borrowedItemService.getAllTags();
    this.borrowedItemService.getAllTags().then(tags => this.tags = tags);

  }

}
