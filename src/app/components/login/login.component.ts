import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from "../../home/home.component";  // Importa HttpClientModule aquí

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterOutlet, HomeComponent],  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthenticationServiceService, private router: Router) { }

  onLogin() {
    this.authService.login({ nombreUsuario: this.email, password: this.password }).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);
       
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Error en el login:', error.error
          );
      },
    });
  }

  goToRegister() {
    this.router.navigate(['/register']); // Asegúrate de que "/register" sea la ruta del componente de registro
  }
}
