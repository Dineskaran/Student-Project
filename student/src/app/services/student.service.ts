import { Injectable } from '@angular/core';
import { Student } from '../student';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(private httpClient:HttpClient) { }

  editflag:boolean=false;
  index: number=1;
  isAddNew: boolean =false;

  studentObj :Student ={
    id: '',
    first_name: " ",
    last_name: " ",
    gender: " ",
    dob: " ",
    address: " ",
    district: " ",
    contact_no: '',
    grade: " "
  }

  addNew(){ 
    
    this.isAddNew = !this.isAddNew;
  }

  deleteStudent(i:number):void {
    this.studentList.splice(i,1);
  }

  editStudent(i:number) {
    this.studentObj =this.studentList[i];
    this.editflag = true;
    this.index = i;

      this.isAddNew = !this.isAddNew;
    }

saveStudent(){
  if(this.editflag==false)
    {
      this.studentList.push(this.studentObj);
    }
    else{
      this.studentList[this.index]=this.studentObj;
      this.editflag=false;
    }

  this.studentObj = {

    id: '',
    first_name: " ",
    last_name: " ",
    dob: " ",
    gender: " ",
    address: " ",
    district:" ",
    contact_no:"",
    grade: " "

  }
}

districts =[

  {id:1, list_value: "Jaffna"},
  {id:2, list_value: "Mullaithivu"},
  {id:3, list_value: "Kilinochchi"},
  {id:4, list_value: "Mannar"},
  {id:5, list_value: "Vavuniya"},
  {id:6, list_value: "Tringomalai"},
  {id:7, list_value: "Kurunakal"},
  {id:8, list_value: "Polanaruva"},
  {id:9, list_value: "Anurathapuram"},
  {id:10, list_value: "puththalam"},
  {id:11, list_value: "Hatton"}
]
  
studentList: Student[] = [
  {
    id: '1',
    first_name: "Kanthan",
    last_name: "Maran",
    dob: "14/05/2011",
    gender: "Male",
    address: "Address 1",
    district: "Kilinochchi",
    contact_no: "0762465046",
    grade: "Grade 8"
  },

  {
    id: '2',
    first_name: "Manikkam",
    last_name: "Thamiliny",
    dob: "28/07/2017",
    gender: "Female",
    address: "Address 2",
    district: "Mannar",
    contact_no: "0773564187",
    grade: "Grade 4"
  },

  {
    id: '3',
    first_name: "Vadivel",
    last_name: "Kavin",
    dob: "01/03/2013 ",
    gender: "Male",
    address: "Address 3",
    district: "Kilinochchi",
    contact_no: "0715478049",
    grade: "Grade 7"
  },

  {
    id: '4',
    first_name: "Sambath",
    last_name: "Kayal",
    dob: "19/08/2008",
    gender: "Female",
    address: "Address 4",
    district: "vavuniya",
    contact_no: "0773564187",
    grade: "Grade 11"
  },



]

  studentUrl = "http://127.0.0.1:8000/studentservice/create_student";
  public addStudent():Observable<Student>{
    return this.httpClient.post<Student>(this.studentUrl,this.studentList)
  }
}
