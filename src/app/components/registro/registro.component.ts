import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [NgClass, FormsModule, NgIf, RouterLink, RouterLinkActive],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']  
})
export class RegistroComponent {
  constructor(private router: Router) {}
  usuarioValue = '';
  senhaValue = '';

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

  registrandoNovoUsuario() {
    const usuariosSalvos = JSON.parse(localStorage.getItem('usuarios') || '[]');

    const usuarioExiste = usuariosSalvos.find(
      (u: any) => u.usuario === this.usuarioValue
    );

    if (usuarioExiste) {
      alert('Nome de usuário já está em uso!');
      return;
    }

    const novoUsuario = {
      usuario: this.usuarioValue,
      senha: this.senhaValue,
    };

    usuariosSalvos.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuariosSalvos));
    alert('Usuário registrado com sucesso!');
    this.router.navigate(['/login']);
  }
}
