import { Component } from '@angular/core';
import { PageTitleComponent } from '../page-title/page-title.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PageTitleComponent, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
  
})
export class AboutComponent {

}
