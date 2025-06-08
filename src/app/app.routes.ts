import { Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { AcompanhamentoComponent } from './components/acompanhamento/acompanhamento.component';

export const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'registrar-se', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'acompanhamento', component: AcompanhamentoComponent },
];
