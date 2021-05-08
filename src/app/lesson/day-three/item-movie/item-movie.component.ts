import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-movie',
  templateUrl: './item-movie.component.html',
  styleUrls: ['./item-movie.component.scss']
})
export class ItemMovieComponent implements OnInit {
  @Input() film:any;
  @Input() likes!:any[];
  @Output() eventOutput = new EventEmitter();
  likeInListLike:any;
  constructor() { }

  ngOnInit(): void {
  }
  like(): void{
    this.eventOutput.emit(this.film);
    this.countLike();
  }
  countLike(){
    this.likes.forEach(ele => {
      if(ele.id === this.film.id){
        // ele.totalLike++;
        this.likeInListLike = ele.totalLike;
      }
    })
  }

}
