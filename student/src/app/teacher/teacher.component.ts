import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeacherService } from '../services/teacher.service';
 
@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {

  teacherService:TeacherService = inject(TeacherService);
  
}
