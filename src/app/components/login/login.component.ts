import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [NgClass, FormsModule, NgIf, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuarioValue = '';
  senhaValue = '';

  constructor(private router: Router) {}

  showPassword = signal(false);
  focusStates = signal({ usuario: false, senha: false });

  setFocusUsuario(focused: boolean) {
    const current = this.focusStates();
    this.focusStates.set({ ...current, usuario: focused });
  }

  setFocusSenha(focused: boolean) {
    const current = this.focusStates();
    this.focusStates.set({ ...current, senha: focused });
  }

  toggleShowPassword() {
    this.showPassword.update(v => !v);
  };

  login() {
    const usuariosSalvos = JSON.parse(localStorage.getItem('usuarios') || '[]');

    const usuarioExiste = usuariosSalvos.find(
      (u: any) => u.usuario === this.usuarioValue
    );

    if (!usuarioExiste) {
      alert('Nome de usuário não encontrado.');
      return;
    }

    const usuarioLogadoAgr = {
      usuario: this.usuarioValue,
      senha: this.senhaValue,
    };

    localStorage.setItem('userLogado', JSON.stringify(usuarioLogadoAgr));
    this.router.navigate(['/acompanhamento']);
    
    alert('Usuário logado com sucesso!');
  }
}

