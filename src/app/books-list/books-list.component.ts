import { Component } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {
n:any;
/**
 *
 */
constructor() {
  this.n=[2,2,3,4,5,6,7,7,,8];
}
}
