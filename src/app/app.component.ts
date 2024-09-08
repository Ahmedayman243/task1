import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './Includes/nav-bar/nav-bar.component';
import { FooterComponent } from './Includes/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent,FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task1';
}
