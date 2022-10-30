import { Component, OnInit } from '@angular/core';

import {PostService} from "../../services";
import {IPost} from "../../Interfaces";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPost[];

  selectedPost: IPost

  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
    this.postService.getAll().subscribe(value => this.posts = value)
  }

  getPost(post: IPost) {
    this.selectedPost = post
  }
}
