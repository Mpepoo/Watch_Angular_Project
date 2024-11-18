import { Routes } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/hero/hero.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { BestsellersComponent } from './pages/bestsellers/bestsellers.component';
import { StoryComponent } from './pages/story/story.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ShopComponent } from './pages/shop/shop.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { OrderdetailsComponent } from './pages/orderdetails/orderdetails.component';


export const routes: Routes = [
{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
},

{
    path: 'home',
    component: HomeComponent
},
{
    path: 'about',
    component: AboutComponent
    },
{
    path: 'shop',
    component:ShopComponent
},
{
    path: 'cart'
    ,component: CartComponent
},
{
    path: 'checkout'
    ,component: CheckoutComponent
},
{
    path: 'product-detail/:id'
    ,component: ProductDetailComponent
},
{
    path: 'login',
    component: LoginComponent
},
{
    path: 'signup',
    component: SignupComponent
},
{
    path: 'orderdetails',
    component: OrderdetailsComponent
},
{
    path: 'contact',
    component: ContactComponent
}


];
