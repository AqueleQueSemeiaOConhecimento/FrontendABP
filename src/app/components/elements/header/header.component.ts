import { NgIf, NgStyle } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, NgStyle, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  menuAberto = signal(false);

  imagemUrl = signal('layout/logo_horizontal_colorida_satc.png');

  menu() {
    this.menuAberto.set(!this.menuAberto());
  }

  logout() {
    localStorage.removeItem("userLogado");
    this.usuarioLogado = '';
    this.router.navigate(['/login']);
    alert("Sessão encerrada!");
  }

  scrolled = signal(false);
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled.set(window.innerWidth > 1024 && window.scrollY >= 80);
  }
  
  usuarioLogado = JSON.parse(localStorage.getItem('userLogado') || '{}');

}
