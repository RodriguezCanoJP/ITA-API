import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  peliculas: any[] = [{
    name: "Frozen 2",
    img: "assets/frozen2.jpg",
    desc: "I didnt watch it"
  },
  {
    name: "The Irishman",
    img: "assets/irishman.jpg",
    desc: "Too long, didnt watch"
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
