import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./components/login/login.component";
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LoginComponent, RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bingo-game';
}
