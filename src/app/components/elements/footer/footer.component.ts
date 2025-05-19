import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  imagemUrl = signal('layout/logo_horizontal_colorida_satc.png');
}
