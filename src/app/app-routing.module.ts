import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { RegisterComponent } from './register/register.component';


// const routes: Routes = [
//   { path: 'component1', component: Component1 }, // Ruta para Component1
//   { path: 'component2', component: Component2 }, // Ruta para Component2
//   { path: '', redirectTo: '/component1', pathMatch: 'full' }, // Redireccionar a Component1 por defecto
//   { path: '**', redirectTo: '/component1' }, // Redireccionar cualquier otra ruta a Component1
// ];

const routes: Routes = [
  { path: 'loginComponent', component: LoginComponent },
  { path: 'registerComponent', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

