import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import Lenis from '@studio-freight/lenis';
import { FooterComponent } from "./components/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pomiel';
  private lenis: Lenis;
  isLoading = false;
  progressWidth = '0%'; // Start at 0%
  currentProgress = 0; // Current progress in percentage

  ngOnInit(): void {
    // this.animateProgress();

    // setInterval(() => {

    //   this.isLoading = false

    // }, 2200)
  }

  animateProgress() {
    const increment = 1;

    const animate = () => {
      if (this.currentProgress < 100) {
        this.currentProgress += increment;
        this.progressWidth = this.currentProgress + '%';
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

  ngAfterViewInit() {
    this.lenis = new Lenis({
      duration: 0.3,
      easing: (t) => t,
      orientation: 'vertical',
      smoothWheel: true
    });

    // Request animation frame for Lenis
    const scroll = (time: number) => {
      this.lenis.raf(time);
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  }

  ngOnDestroy() {
    // Clean up when the component is destroyed
    if (this.lenis) {
      this.lenis.destroy();
    }
  }
}
