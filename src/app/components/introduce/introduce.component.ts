import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

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
  isSend = false;
  notification = '';

  onSubmit() {
    const templateParams = {
      email: this.email,
      message: this.message,
      lastName: this.lastName,
      firstName: this.firstName,
      toEmails: ' pomielvietnam@gmail.com'
    };

    const serviceID = 'service_by8nou9';
    const templateID = 'template_v3l260s';
    const publicKey = 'aqgqBD-t5wjmIVhFb';

    emailjs
    .send(serviceID, templateID, templateParams, {
      publicKey,
    })
    .then(
      () => {
        this.notification = 'Gửi thành công, cảm ơn bạn đã gửi thông tin!';
        this.isSend = true;
      },
      (error) => {
        this.isSend = true;
        this.notification = 'Gửi thất bại, vui lòng thử lại!';
        throw new Error(error);
      },
    );
  }
}
