import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input('title') title:string;
  @Input('body') body:string;
  @Input('noteBody') noteBody: string;

  @Output('delete') deleter: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.deleter.emit();
  }
}
