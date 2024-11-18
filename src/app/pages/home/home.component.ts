import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { CollectionComponent } from '../collection/collection.component';
import { CategoriesComponent } from "../categories/categories.component";
import { BestsellersComponent } from "../bestsellers/bestsellers.component";
import { StoryComponent } from '../story/story.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, CollectionComponent, CategoriesComponent, BestsellersComponent, StoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
