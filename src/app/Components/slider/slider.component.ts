import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});
  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/frozen2.jpg',
    };
    this.slides[1] = {
      src: './assets/irishman.jpg',
    }
  }

}
