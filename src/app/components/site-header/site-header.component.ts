import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type NavItem = {
  label: string;
  fragment?: string;
  href?: string;
};

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './site-header.component.html',
})
export class SiteHeaderComponent {
  readonly navItems: NavItem[] = [
    { label: 'PROFILE', fragment: 'a-profile' },
    { label: 'SKILL', fragment: 'a-skill' },
    { label: 'WORKS', fragment: 'a-works' },
    { label: 'CONTACT', href: 'mailto:no.215.tyler@gmail.com' },
  ];
}
