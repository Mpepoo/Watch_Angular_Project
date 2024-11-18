import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { PageTitleComponent } from '../page-title/page-title.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, SignupComponent, PageTitleComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor() {}
}
