import { Component } from '@angular/core';
import { AppLogoComponent } from '../applogo/applogo.component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AppLogoComponent, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
