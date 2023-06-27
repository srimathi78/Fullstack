import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {

  constructor(private service:StudentService, private router:ActivatedRoute) { }

  StudentList:any=[]; 

  ModalTitle:string | undefined;
  ActivateStudentEditComponent:boolean | undefined;
  stu:any;

  ngOnInit(): void {
    this.refreshStudentList();
  }
  addClick(){
     this.stu={
      id:0,
      stname:"",
      course:""
     }
     this.ModalTitle="Add Student";
     this.ActivateStudentEditComponent=true;
  }
  editClick(item:any){
    this.stu=item;
    this.ModalTitle="Edit Student";
    this.ActivateStudentEditComponent=true;

  }
  deleteClick(item:any){
      if(confirm("Are you sure??")){
       this.service.deleteStudent(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshStudentList();
       });
      }
  }

  closeclick(){
    this.ActivateStudentEditComponent=false;
    this.refreshStudentList();
  }

    refreshStudentList(){
    this.service.getStudentList().subscribe((data:any)=>{
      this.StudentList=data;
    });
  }

}

