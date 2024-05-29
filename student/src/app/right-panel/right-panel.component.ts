import { Component } from '@angular/core';
import { StudentsComponent } from '../students/students.component';
import { TeacherComponent } from '../teacher/teacher.component';
@Component({
  selector: 'app-right-panel',
  standalone: true,
  imports: [StudentsComponent, TeacherComponent],
  templateUrl: './right-panel.component.html',
  styleUrl: './right-panel.component.css'
})
export class RightPanelComponent {

}
