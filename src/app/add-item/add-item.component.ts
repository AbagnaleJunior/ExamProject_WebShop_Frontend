import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  selectedFile = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {

/*  add this when Frederik has Api ready. https://www.youtube.com/watch?v=YkvqLNcJz3Y&t=1s
    this.http.post('');
  */
  }
}
