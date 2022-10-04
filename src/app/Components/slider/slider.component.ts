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
      src: '/Users/juanpablorodriguez/Documents/GitHub/ITA-API/intel-ta/assets/frozen2.jpeg',
    };
    this.slides[1] = {
      src: '/Users/juanpablorodriguez/Documents/GitHub/ITA-API/intel-ta/assets/irishman.jpeg',
    }
    this.slides[2] = {
      src: '/Users/juanpablorodriguez/Documents/GitHub/ITA-API/intel-ta/assets/frozen2.jpeg',
    };
    this.slides[3] = {
      src: '/Users/juanpablorodriguez/Documents/GitHub/ITA-API/intel-ta/assets/irishman.jpeg',
    }
    this.slides[4] = {
      src: '/Users/juanpablorodriguez/Documents/GitHub/ITA-API/intel-ta/assets/frozen2.jpeg',
    };
    this.slides[5] = {
      src: '/Users/juanpablorodriguez/Documents/GitHub/ITA-API/intel-ta/assets/irishman.jpeg',
    }
    this.slides[6] = {
      src: '/Users/juanpablorodriguez/Documents/GitHub/ITA-API/intel-ta/assets/frozen2.jpeg',
    };
    this.slides[7] = {
      src: '/Users/juanpablorodriguez/Documents/GitHub/ITA-API/intel-ta/assets/irishman.jpeg',
    }
    this.slides[8] = {
      src: '/Users/juanpablorodriguez/Documents/GitHub/ITA-API/intel-ta/assets/frozen2.jpeg',
    };
    this.slides[9] = {
      src: '/Users/juanpablorodriguez/Documents/GitHub/ITA-API/intel-ta/assets/irishman.jpeg',
    }
    this.slides[10] = {
      src: '/Users/juanpablorodriguez/Documents/GitHub/ITA-API/intel-ta/assets/frozen2.jpeg',
    };
    this.slides[11] = {
      src: '/Users/juanpablorodriguez/Documents/GitHub/ITA-API/intel-ta/assets/irishman.jpeg',
    }
    this.slides[12] = {
      src: '/Users/juanpablorodriguez/Documents/GitHub/ITA-API/intel-ta/assets/frozen2.jpeg',
    };
    this.slides[13] = {
      src: '/Users/juanpablorodriguez/Documents/GitHub/ITA-API/intel-ta/assets/irishman.jpeg',
    }
    this.slides[14] = {
      src: '/Users/juanpablorodriguez/Documents/GitHub/ITA-API/intel-ta/assets/frozen2.jpeg',
    };
  }

}
