import { Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'registrar-se', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
];
