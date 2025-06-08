import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acompanhamento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './acompanhamento.component.html',
  styleUrl: './acompanhamento.component.css'
})
export class AcompanhamentoComponent {
  userLogado = JSON.parse(localStorage.getItem('userLogado') || '{}');
  nomeUsuario = this.userLogado.usuario || 'desconhecido';
  materias: any[] = [];

  constructor() {
    this.carregarMaterias();
  }

  private getStorageKey(): string {
    return `materias_${this.nomeUsuario}`;
  }

  carregarMaterias() {
    this.materias = JSON.parse(localStorage.getItem(this.getStorageKey()) || '[]');
  }

  adicionarMateria() {
    this.materias.push({
      nome: '',
      nota1: '',
      nota2: '',
      nota3: '',
      nota4: '',
      faltas: ''
    });
  }

  removerMateria(index: number) {
    this.materias.splice(index, 1);
  }

  salvarLocalStorage() {
    localStorage.setItem(this.getStorageKey(), JSON.stringify(this.materias));
    alert('Dados salvos para o usuário: ' + this.nomeUsuario);
  }

  calcularMedia(materia: any): string {
    const notas = [materia.nota1, materia.nota2, materia.nota3, materia.nota4]
      .map(n => parseFloat(n))
      .filter(n => !isNaN(n));
    if (notas.length === 0) return '-';
    const media = notas.reduce((a, b) => a + b, 0) / notas.length;
    return media.toFixed(1);
  }
}
