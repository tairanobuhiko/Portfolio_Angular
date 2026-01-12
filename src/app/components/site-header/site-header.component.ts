import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

type NavItem = {
  label: string;
  fragment?: string;
  href?: string;
};

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './site-header.component.html',
})
export class SiteHeaderComponent {
  readonly navItems: NavItem[] = [
    { label: 'PROFILE', fragment: 'a-profile' },
    { label: 'SKILL', fragment: 'a-skill' },
    { label: 'WORKS', fragment: 'a-works' },
    { label: 'CONTACT', href: 'mailto:no.215.tyler@gmail.com' },
  ];

  navOpen = false;

  constructor(router: Router) {
    // ルーティング時に自動でメニューを閉じる
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.navOpen = false;
      }
    });
  }

  toggleNav(): void {
    this.navOpen = !this.navOpen;
  }

  closeNav(): void {
    this.navOpen = false;
  }
}
