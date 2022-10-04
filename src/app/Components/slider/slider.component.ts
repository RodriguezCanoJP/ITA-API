import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  info: any;
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor(private service: ServicesService) { }
  

  ngOnInit(): void {
    this.service.getbooks().subscribe(data => {
          this.info = data;
      }
  )
  }

}
