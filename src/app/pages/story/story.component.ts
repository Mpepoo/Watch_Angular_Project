import { Component } from '@angular/core';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [],
  // templateUrl: './story.component.html',
  // styleUrl: './story.component.css'

  template:`
  
  <section class="OurStory Section">
            <div class="Brown--Layer"></div>
            <div class="Dark--Layer"></div>
            <img src="/images/1-1.jpg" alt="" class="Our--Story--Img">
            <div class="OurStory--Box">
                <h2 class="OurStory--Title">Swiss Essence</h2>
                <p class="OurStory--Paragraph">
                    Here go three good news. First: some things will never get old. Second: we believe
                    that a good watch is a great opportunity to complement the look. Third: watches
                    have come in fashion again. Doesn’t matter retro or modern, watches now are
                    essential elements of a great look.
                </p>
                <button class="btn"><a href="about.html">Read our story</a></button>
            </div>

        </section>
  `
})
export class StoryComponent {

}
