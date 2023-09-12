import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { switchMap, tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  loginName: string = '';
  loginPassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.loginName, this.loginPassword)
    .pipe(
      switchMap((response) => {
        // Supongamos que el servidor devuelve el token en una propiedad 'token'
        const token = response.token;
        this.authService.setToken(token); // Almacenar el token en el servicio
        // Redireccionar a otra página después de la autenticación
        return this.router.navigate(['/mainPage']); // Cambia '/dashboard' por la ruta adecuada
      }),
      catchError((error) => {
        // Manejar errores de autenticación, mostrar un mensaje de error, etc.
        console.error('Error de autenticación:', error);
        return of(null); // Devolver un observable vacío o un valor predeterminado si es necesario
      })
    )
    .subscribe();
  }
}
