import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './applogo.component.html',
  styleUrl: './applogo.component.scss'
})
export class AppLogoComponent {

}
