import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent {
  buttonContent = 'View plans'
  buttonColor: 'light' | 'dark' = 'light'
}
