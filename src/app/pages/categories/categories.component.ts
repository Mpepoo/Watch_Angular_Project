import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  // templateUrl: './categories.component.html',
  // styleUrl: './categories.component.css'

  template:`
   <section class="ShopCategory Section">
            <div class="Woman--shop">
                <img src="images/Women shop.png" alt="Watch" class="Shop--Woman--Img">
                <div class="Shop--Box">
                    <p class="Shop--Small--Title">shop</p>
                    <h3 class="Shop--Category">Women's</h3>
                </div>
            </div>
            <div class="Men--shop">
                <img src="/images/Men shop.png" alt="Watch" class="Shop--Men--Img">
                <div class="Shop--Box">
                    <p class="Shop--Small--Title">shop</p>
                    <h3 class="Shop--Category">Men's</h3>
                </div>
            </div>
        </section>
  `
})
export class CategoriesComponent {

}
