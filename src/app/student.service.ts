import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  API = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  // @ts-ignore
  // tslint:disable-next-line:typedef
  public registerStudent(studentData) {
    return this.http.post(this.API + '/registerStudent', studentData);
  }

  // tslint:disable-next-line:typedef
  public getStudents() {
    return this.http.get(this.API + '/getStudents');
  }

  // tslint:disable-next-line:typedef
  public deleteStudent(rollNumber: any) {
    return this.http.delete(this.API + '/deleteStudent?id=' + rollNumber);
  }

  // tslint:disable-next-line:typedef
  public updateStudent(student: any) {
    return this.http.put(this.API + '/updateStudent', student);
  }
}
