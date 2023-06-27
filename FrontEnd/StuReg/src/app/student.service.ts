import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {    
  
    // readonly APIUrl="http://localhost:53535/api";
     apiUrl = 'https://localhost:7032/api/Student/UpdateStudent';
  
  
    constructor(private http: HttpClient) { }
    url = " https://localhost:7032/api/Student/UpdateStudent/{id}";  
   
  
    getStudentList():Observable<any[]> {
      return this.http.get<any[]>('https://localhost:7032/api/Student'+ '/GetStudent');
    }
  
    addStudent(val: any) {
      return this.http.post<any>('https://localhost:7032/api/Student' + '/AddStudent', val);
     
    }   
    

    deleteStudent(id: any) {
      return this.http.delete<any>('https://localhost:7032/api/Student/DeleteStudent/'+ id);
    }
  }

       //const url = `${this. apiUrl}/${this.id}`;


    // updateStudent(val:any):Observable<any> {
    //   //const url = '${apiUrl}/'+ '/UpdateStudent/${id}';
    //   return this.http.put('https://localhost:7032/api/Student/UpdateStudent/${id}',val);
    // }
     // updateStudent(id:any,val:any) {
    //   return this.http.put('${https://localhost:7032/api/Student }'+'{/UpdateStudent/${id}',val);
    // }
    // updateStudent(id:any,studentData:any) {
    //   return this.http.put<any>('https://localhost:7032/api/Student' +'/UpdateStudent/', id);
    // }    
    // updateStudent(id: any,val: any) {
    //    return this.http.put('https://localhost:7032/api/Student/UpdateStudent/${this.id}', val);

    // }
  