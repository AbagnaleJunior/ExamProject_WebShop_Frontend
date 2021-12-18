import { Injectable } from '@angular/core';
import {PostingData} from "../shared/models/postingData";

@Injectable({
  providedIn: 'root'
})
export class PostingService {

  constructor() { }

  addPost(post: PostingData) {
    let posts = [];
    if (localStorage.getItem('Posts')) {
      posts = JSON.parse(localStorage.getItem('Posts') as string);
      posts = [post, ...posts];
    } else {
      posts = [post];
    }
    localStorage.setItem('Posts', JSON.stringify(posts))
  }
}
