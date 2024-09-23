import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  secondHeader = false;

  ngOnInit(): void {
    const scrollPosition = window.scrollY;
    const windowWidth = window.innerWidth;

    if (scrollPosition >= 100 || windowWidth <= 768) {
      this.secondHeader = true;
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPosition = window.scrollY;
    const windowWidth = window.innerWidth;

    if (scrollPosition >= 100 || windowWidth <= 768) {
      this.secondHeader = true;
    } else {
      this.secondHeader = false;
    }
  }

  handleClick(): void{
    const toggleInput = document.getElementById('drawer-toggle') as HTMLInputElement;

    if (toggleInput && toggleInput.type === 'checkbox') {
        toggleInput.checked = false;
    }
  }
}
