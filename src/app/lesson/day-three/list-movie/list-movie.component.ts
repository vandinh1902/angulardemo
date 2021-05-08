import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ItemMovieComponent } from '../item-movie/item-movie.component';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent implements OnInit {

  @ViewChildren(ItemMovieComponent) itemMovieTagList!: QueryList<ItemMovieComponent>;
  listMovie = [
    {
      id: '1',
      name: 'than chet ',
      price: '20000',
      details: 'test detail',
      imgUrl:'/assets/img/sp6.jpg',
      // totalLike: 0
    },
    {
      id: '2',
      name: 'than chet 2',
      price: '20000',
      details: 'test detail 2',
      imgUrl:'',
      // totalLike: 0
    },
    {
      id: '3',
      name: 'than chet 3',
      price: '20000',
      details: 'test detail 3',
      imgUrl:'',
      // totalLike: 0
    },
    {
      id: '4',
      name: 'than chet 4',
      price: '20000',
      details: 'test detail 4',
      imgUrl:'',
      // totalLike: 0
    }
  ]
  listLikeMovie = [
    {id: '1',
    name: 'than chet 1',
    
    totalLike: 0},
    {id: '2',
    name: 'than chet 2',
    
    totalLike: 0},
    {id: '3',
    name: 'than chet 3',
    
    totalLike: 0},
    {id: '4',
    name: 'than chet 4',
    
    totalLike: 0},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  invokeActionFromChild(eventvalue:any): void{
    // eventvalue.totalLike ++;
    this.listLikeMovie.forEach(item =>{
      if(item.id === eventvalue.id){
        item.totalLike++;
      }
    })
  }
  demoViewChildren(){
    
    this.itemMovieTagList.map(item => {
      item.film.details = "abccc"
    })
  }

}
