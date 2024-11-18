import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  // templateUrl: './footer.component.html',
  // styleUrl: './footer.component.css'
  template: `
   <footer>
        <div class="footer-div">
            <div class="name-div">
                <a href="index.html"><p class="Logo-p"><span>T</span>ime<span>l</span>ess</p></a>
            </div>
            <div class="footer-p">
                <p>
                    Sign up for our newsletter to receive special offers, <br>
                    news and great sales notifications.
                </p>
            </div>
            <div class="social-icons">
                <a href="#"><img src="/images/facebook-box-line.svg" alt=""></a>
                <a href="#"><img src="/images/instagram-line.svg" alt=""></a>
                <a href="#"><img src="/images/youtube-line.svg" alt=""></a>
            </div>
            <div class="copyright-div">
                <p>&copy; 2024 Timeless. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  `
})
export class FooterComponent {

}
