import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-title',
  standalone: true,
  imports: [CommonModule],
  // templateUrl: './page-title.component.html',
  // styleUrl: './page-title.component.css'

  template:`
  
  <div class="breadcrumb-container">
            <h1 id="page-title">{{ pageTitle }}</h1>
            <div id="breadcrumb">
            <nav>
      <ng-container *ngFor="let crumb of breadcrumbs; let isLast = last">
        <a [href]="crumb.href">{{ crumb.anchor }}</a>
        <span *ngIf="!isLast"> / </span>
      </ng-container>
    </nav></div>
        </div>
  `

  
})
export class PageTitleComponent implements OnInit{

  breadcrumbs: { href: string, anchor: string }[] = [];
  pageTitle: string = '';

  ngOnInit(): void {
    this.generateBreadcrumbs();
    this.displayPageTitle();
  }

  generateBreadcrumbs(): void {
    const pathNames = window.location.pathname.split('/').filter(path => path);
    this.breadcrumbs = pathNames.map((item, i) => {
      const href = `/${pathNames.slice(0, i + 1).join('/')}`;
      const anchor = item.replace(/-/g, ' ').replace(/\.[^/.]+$/, ''); // Remove file extension
      return { href, anchor };
    });
    this.breadcrumbs.unshift({ href: '/', anchor: 'Home' });
  }

  displayPageTitle(): void {
    this.pageTitle = document.title;
  }
  
}
