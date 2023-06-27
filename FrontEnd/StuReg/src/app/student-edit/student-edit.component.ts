import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  @Input() stu: any;
  id!: number;
  stname!: string;
  course!: string;
  Student: any;
  // stu: any = {};
 

  constructor(private service: StudentService, private router:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
    this.id = this.stu.id;
    this.stname = this.stu.stname;
    this.course = this.stu.course;
  }

  addStudent(){
    var val = {id:this.stu.id,
            stname:this.stu.stname,
            course:this.stu.course };  
     this.service.addStudent(val).subscribe(res=>{
              alert(res.toString());
     });  
     location.reload(); 
  }
  // updateStudent(){
  //   var val = {
  //      id:this.id,
  //     stname:this.stname, 
  //     course:this.course };  
  //   //  this.service.updateStudent(this.id,val).subscribe(res=>{
  //   //       alert(res.toString());
  //          this.service.updateStudent(this.id,val).subscribe(
  //       res => {
  //         alert('Student updated successfully');
  //       });
  //     }
  
        //console.log('Student updated successfully');
     
     
      //  updateStudent() {
      //   const val = {
      //     id: this.stu.id,
      //     stname: this.stu.stname,
      //     course: this.stu.course
      //   };     
     
     
      //   this.service.updateStudent(this.stu.id,this.stu).subscribe(
      //     res => {
      //       alert('Student updated successfully');
           
      //     },
      //     error => {
      //       alert('An error occurred while updating the student: ' + error.message);
            
      //     }
      //   ); }


     // Assuming you have the `stu` object initialized with the student data
      updateStudent() {
         const url = 'https://localhost:7032/api/Student/UpdateStudent/${this.stu.id}'; 
         // Create an object with the updated student data 
         const updatedStudent = { id: this.stu.id, stname: this.stu.stname, course: this.stu.course };
          this.http.put(url, updatedStudent) .subscribe( (response) => { 
            // Handle the success response here 
            alert('Student updated successfully');
            console.log('Student updated successfully:', response); 
          }, 
            (error) => { 
              // Handle the error response here 
              console.error('Error updating student:', error); 
            } ); 
            location.reload(); 
            }
    
 

}
  

