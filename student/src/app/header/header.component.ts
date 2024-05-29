import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainService } from '../main.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  mainService: MainService = inject(MainService);
}
