import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ButtonComponent } from './components/button/button.component';
import { DifferencesComponent } from './components/differences/differences.component';
import { HowWeWorkComponent } from './components/how-we-work/how-we-work.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroductionComponent,
    ButtonComponent,
    DifferencesComponent,
    HowWeWorkComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
