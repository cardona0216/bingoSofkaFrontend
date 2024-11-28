import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nombreUsuario: string = '';
  correo: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthenticationServiceService, private router: Router) {}
  goToLogin() {
    this.router.navigate(['/login']); // Redirigir al login si el usuario ya tiene cuenta
  }

  onRegister() {
    const usuario = {
      nombreUsuario: this.nombreUsuario,
      correo: this.correo,
      password: this.password
    };

    this.authService.register(usuario).subscribe({
      next: (response) => {
        console.log('Registro exitoso:', response);
        // Aquí puedes redirigir a otra página, por ejemplo:
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Error en el registro:', error);
        this.errorMessage = error.error; // Muestra el mensaje de error del backend
      }
    });
  }


}
