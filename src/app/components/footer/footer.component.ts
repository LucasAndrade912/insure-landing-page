import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerItems = [
    {
      title: 'Our Company',
      links: ['How we work', 'Why insure?', 'View plans', 'Reviews']
    },
    {
      title: 'Help Me',
      links: ['Faq', 'Terms of use', 'Privacy policy', 'Cookies']
    },
    {
      title: 'Contact',
      links: ['Sales', 'Support', 'Live chat']
    },
    {
      title: 'Others',
      links: ['Carrers', 'Press', 'Licenses']
    },
  ]
}
