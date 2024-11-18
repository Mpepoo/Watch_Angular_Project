import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageTitleComponent } from '../page-title/page-title.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports : [ RouterLink, PageTitleComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor() {}
}

