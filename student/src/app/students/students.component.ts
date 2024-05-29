import { Component,OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{

  studentService:StudentService=inject(StudentService)
  
  ngOnInit(): void {
      this.studentService.addStudent().subscribe(data=>{
        console.log(data);
      },error=>{
        alert('something wrong when add student record');
      })
  }
  
}
