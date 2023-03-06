import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from "@angular/core";

@Component({
  selector: "app-auth",
  template: ` <router-outlet></router-outlet> `,
  standalone: true,
  imports: [CommonModule, RouterOutlet],
})
export class AuthComponent {}
