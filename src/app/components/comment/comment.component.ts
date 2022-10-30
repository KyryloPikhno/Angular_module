import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

import {IComment} from  '../../Interfaces'


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment: IComment

  @Output()
  liftComment = new EventEmitter<IComment>()

  constructor() { }

  ngOnInit(): void {
  }

  lift(): void{
    this.liftComment.emit(this.comment)
  }
}
