import { Injectable } from '@angular/core';
import { Teacher } from '../teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() { }

  isAddNew: boolean = true;

  teacherObj : Teacher={

    id: "",
    first_name: "",
    last_name:"",
    Dob:"",
    gender: "",
    address: "",
    district: "",
    contact: "",
    Expertise: ""

  }


  addNew(){ 
    
    this.isAddNew = !this.isAddNew;

  }

  saveTeacher(){

    this.teacherList.push(this.teacherObj)

    this.teacherObj = {
      id: "",
      first_name: "",
      last_name:"",
      Dob:"",
      gender: "",
      address: "",
      district: "",
      contact: "",
      Expertise: ""
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


  teacherList: Teacher[] = [
    {
      id: '1',
      first_name: "Kanthiny",
      last_name: "Maran",
      Dob: "1/05/1999",
      gender: "Male",
      address: "Address 1",
      district: "Kilinochchi",
      contact: "0762465046",
      Expertise: "Grade 8"
    },
    {
      id: '2',
      first_name: "jensi",
      last_name: "Thass",
      Dob: "20/08/1996",
      gender: "Female",
      address: "Address 2",
      district: "Mannar",
      contact: "0773564187",
      Expertise: "Grade 4"
    },
    {
      id: '3',
      first_name: "Vadivel",
      last_name: "Kavin",
       Dob: "01/03/1988 ",
      gender: "Male",
      address: "Address 3",
      district: "vavuniya",
      contact: "0715478049",
      Expertise: "Grade 7"
    },
    {
      id: '4',
      first_name: "Sambath",
      last_name: "Kayal",
      Dob: "19/05/1987",
      gender: "Female",
      address: "Address 4",
      district: "vavuniya",
      contact: "0773564187",
      Expertise: "Grade 11"
    },
    {
      id: '5',
      first_name: "Seelan",
      last_name: "vijayan",
      Dob: "10/09/1998",
      gender: "Male",
      address: "Address 5",
      district: "Kilinochchi",
      contact: "0212285411",
      Expertise: "Grade 12"
    },
  
  ]
}
