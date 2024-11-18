import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import ScrollReveal from 'scrollreveal';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, AfterViewInit {
  private currentSlide = 1;
  private sliderElements: HTMLElement[] = [];
  private cursorElement!: HTMLElement;
  private scrollUpElement!: HTMLElement;
  private nextBtnBlack!: HTMLElement | null;
  private prevBtnBlack!: HTMLElement | null;
  private nextBtnBrown!: HTMLElement | null;
  private prevBtnBrown!: HTMLElement | null;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.sliderElements = Array.from(document.querySelectorAll('.Banner')) as HTMLElement[];
    this.cursorElement = document.querySelector('.Cursor') as HTMLElement;
    this.scrollUpElement = document.querySelector('.ScrollUp') as HTMLElement;

    // Initialize buttons
    this.nextBtnBlack = document.getElementById("Next--Black");
    this.prevBtnBlack = document.getElementById("prev--Black");
    this.nextBtnBrown = document.getElementById("Next--Brown");
    this.prevBtnBrown = document.getElementById("prev--Brown");

    // Add event listeners for buttons
    if (this.nextBtnBlack) this.nextBtnBlack.addEventListener('click', this.nextSlide.bind(this));
    if (this.prevBtnBlack) this.prevBtnBlack.addEventListener('click', this.prevSlide.bind(this));
    if (this.nextBtnBrown) this.nextBtnBrown.addEventListener('click', this.nextSlide.bind(this));
    if (this.prevBtnBrown) this.prevBtnBrown.addEventListener('click', this.prevSlide.bind(this));

    // Show the first slide
    this.sliderElements[0].classList.add('active');
    this.setupScrollReveal();
  }

  ngAfterViewInit(): void {
    this.initCursorMovement();
    this.initScrollUp();
  }

  initCursorMovement(): void {
    window.addEventListener('mousemove', (event: MouseEvent) => {
      const posX = event.clientX;
      const posY = event.clientY;
      this.cursorElement.style.left = `${posX}px`;
      this.cursorElement.style.top = `${posY}px`;
    });
  }

  nextSlide(): void {
    if (this.currentSlide === 2) {
      this.currentSlide = 1;
      this.slideMovement();
      this.triggerScrollReveal('#Slider--Img1', '#Watch1', '#Slider--Text1');
    } else {
      this.currentSlide++;
      this.slideMovement();
      this.triggerScrollReveal('#Slider--Img2', '#Watch2', '#Slider--Text2');
    }
  }

  prevSlide(): void {
    if (this.currentSlide === 1) {
      this.currentSlide = 2;
      this.slideMovement();
      this.triggerScrollReveal('#Slider--Img2', '#Watch2', '#Slider--Text2');
    } else {
      this.currentSlide--;
      this.slideMovement();
      this.triggerScrollReveal('#Slider--Img1', '#Watch1', '#Slider--Text1');
    }
  }

  slideMovement(): void {
    this.removeActiveClasses();
    this.sliderElements[this.currentSlide - 1].classList.add('active');
  }

  removeActiveClasses(): void {
    this.sliderElements.forEach((slide) => {
      slide.classList.remove('active');
    });
  }

  triggerScrollReveal(imgSelector: string, watchSelector: string, textSelector: string): void {
    ScrollReveal().reveal(watchSelector, { origin: 'bottom', distance: '800px', duration: 1000, delay: 900, reset: false });
    ScrollReveal().reveal('.ScrollR-whiteLayer', { origin: 'left', distance: '800px', duration: 600, delay: 1000, reset: false });
    ScrollReveal().reveal('.ScrollR-whiteLayer2', { origin: 'left', distance: '800px', duration: 600, delay: 1000, reset: false });
    ScrollReveal().reveal(imgSelector, { origin: 'left', distance: '800px', duration: 2000, delay: 1300, reset: false });
    ScrollReveal().reveal(textSelector, { origin: 'right', distance: '800px', duration: 2000, delay: 1300, reset: false });
  }

  initScrollUp(): void {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 100) {
        this.scrollUpElement.style.display = 'block';
      } else {
        this.scrollUpElement.style.display = 'none';
      }
    });

    this.scrollUpElement.addEventListener('click', () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
  }

  setupScrollReveal(): void {
    const SlideLeft = {
      origin: 'left',
      distance: '800px',
      duration: 2000,
      delay: 1300,
      reset: false
    };

    const SlideRight = {
      origin: 'right',
      distance: '800px',
      duration: 2000,
      delay: 1300,
      reset: false
    };

    const CenterWatch = {
      origin: 'bottom',
      distance: '800px',
      duration: 1000,
      delay: 900,
      reset: false
    };

    ScrollReveal().reveal('#Watch1', CenterWatch);
    ScrollReveal().reveal('.ScrollR-whiteLayer', { origin: 'left', distance: '800px', duration: 600, delay: 1000, reset: false });
    ScrollReveal().reveal('#Slider--Img1', SlideLeft);
    ScrollReveal().reveal('#Slider--Text1', SlideRight);
  }
}