import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {IPost} from '../../Interfaces'


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPost;

  @Output()
  liftPost = new EventEmitter<IPost>()

  constructor() { }

  ngOnInit(): void {
  }

  lift(): void{
    this.liftPost.emit(this.post)
  }

}
