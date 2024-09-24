import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';


interface Item {
  desc: string;
  image: string;
}

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }), // Start invisible
        animate('300ms ease-out', style({ opacity: 1 })) // Fade in
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 })) // Fade out
      ])
    ])
  ]
})
export class HomepageComponent {
  items1: Item[] = [{
    image: '/01.png',
    desc: `Hình thức tham gia mạng xã hội (INSTAGRAM FOLLOW):<br> Follow và nhận phần thưởng (100P)`
  },
  {
    image: '/02.png',
    desc: `Hình thức tham gia thông thường (NAVER PLACE):<br> Chỉ dành cho khách hàng mới (100P)`
  },
  {
    image: '/03.png',
    desc: `Hình thức dành cho thành viên mới đăng ký (Đăng ký thành viên mới tại Shinhan super SOL):<br> Dành cho khách hàng trên 20 tuổi (1300P)`
  },
  {
    image: '/04.png',
    desc: `Hình thức click xem sản phẩm (Click xem sản phẩm ở NAVER STORE):<br> Click xem sản phẩm ở STORE.`
  }];

  items2: Item[] = [{
    image: '/05.png',
    desc: `SHOPPEE`
  },
  {
    image: '/06.png',
    desc: `LAZADA`
  },
  {
    image: '/07.png',
    desc: `TIKI`
  }];

  brands: Partial<Item>[] = [{
    image: '/NBT.png'
  }, {
    image: '/TNK.png'
  }, {
    image: '/GREENP.png'
  }, {
    image: 'CAULY.png'
  }, {
    image: 'IVE.png'
  }]

  activeItems: Item[] = [];

  activeItems2: Item[] = [];

  activeItemIndex1 = 0;

  activeItemIndex2 = 0;

  autoActivateInterval: any;

  autoActivateInterval2: any;

  ngOnInit(): void {
    this.startAutoActivation1();
    this.startAutoActivation2();
    window.scrollTo(0, 0);
  }

  handlePopup1(index: number) {
    this.activeItemIndex1 = index;
    this.startAutoActivation1();
  }

  handlePopup2(index: number) {
    this.activeItemIndex2 = index;
    this.startAutoActivation2();
  }

  startAutoActivation1() {
    clearInterval(this.autoActivateInterval);

    this.autoActivateInterval = setInterval(() => {
        this.activeItemIndex1++;

        if (this.activeItemIndex1 >= this.items1.length) {
            this.activeItemIndex1 = 0;
        }
    }, 3000);
  }

  startAutoActivation2() {
    clearInterval(this.autoActivateInterval2);

    this.autoActivateInterval2 = setInterval(() => {
        this.activeItemIndex2++;

        if (this.activeItemIndex2 >= this.items2.length) {
            this.activeItemIndex2 = 0;
        }
    }, 3000);
  }
}
