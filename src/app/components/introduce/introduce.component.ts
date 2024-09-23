import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
interface Item {
  desc: string;
  image: string;
}

@Component({
  selector: 'app-introduce',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './introduce.component.html'
})
export class IntroduceComponent {
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

  email: string = '';
  lastName: string = '';
  firstName: string = '';
  message: string = '';

  onSubmit() {
    const mailtoLink = `mailto:dongsug503@gmail.com?subject=Contact%20Form%20Submission&body=Email:%20${encodeURIComponent(this.email)}%0D%0A%0D%0AHọ:%20${encodeURIComponent(this.lastName)}%0D%0A%0D%0ATên:%20${encodeURIComponent(this.firstName)}%0D%0A%0D%0ALời%20nhắn:%20${encodeURIComponent(this.message)}`;

    window.location.href = mailtoLink;
  }
}
