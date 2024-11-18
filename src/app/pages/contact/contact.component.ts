import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { PageTitleComponent } from '../page-title/page-title.component';
import { CommonModule } from '@angular/common'; // Add this line


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PageTitleComponent, CommonModule],
  // templateUrl: './contact.component.html',
  // styleUrl: './contact.component.css'

  template: `
  
<app-page-title></app-page-title>

<div class="container">
    <section class="contact-boxes">
        <div class="contact-box">
            <h4>Address</h4>
            <p>123 Main St, Anytown, Cairo, Egypt</p>
        </div>

        <div class="contact-box">
            <h4>Phone</h4>
           <p> <a href="tel:00201234567">+2 010 123 4567</a></p>
           <p> <a href="tel:00201234568">+2 010 123 4568</a></p>
        </div>

        <div class="contact-box">
            <h4>Mail</h4>
            <p><a href="mailto:info@mysite.com">info&#64;mysite.com</a></p>
           <p> <a href="mailto:support@mysite.com">support&#64;mysite.com</a></p>
        </div>

        <div class="contact-box">
            <h4>Hours</h4>
            <p>Mon - Fri: 8 AM - 6 PM </p> <p> Sat: 9 AM - 4 PM</p>
        </div>
    </section>
    <section class="form-section">
        <h2>Get in Touch</h2>
        <div class="form-box">
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="validationDefault01" class="form-label">Name</label>
                    <input type="name" class="form-control" id="validationDefault01" value="" required>
                </div>
                <div class="col-md-6">
                    <label for="validationDefault02" class="form-label">Email</label>
                    <input type="email" class="form-control" id="validationDefault02" value="" required>
                </div>
                <div class="mb-3 col-md-12">
                    <label for="validationTextarea" class="form-label">Message</label>
                    <textarea class="form-control" id="validationTextarea" placeholder="" required></textarea>
                </div>
                <div class="invalid-feedback">
                    Please enter a message in the textarea.
                </div>
                <div class="col-12 text-center">
                    <button class="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
        </div>

    </section>




<div class="map">
<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55254.362942481785!2d31.189284211334193!3d30.054133222466263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1728246745392!5m2!1sen!2seg"
    width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</div>
  
  
  `
})
export class ContactComponent {

}
