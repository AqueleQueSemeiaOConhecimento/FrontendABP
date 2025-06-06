import { Component } from '@angular/core';
import { HeaderComponent } from './components/elements/header/header.component';
import { FooterComponent } from './components/elements/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEndABP';
}
