// @ts-ignore
import {Component} from '@angular/core';
import {StudentService} from './student.service';
import {NgForm} from '@angular/forms';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentsDashboard';

  studentDetails = null;

  studentToUpdate = {
    rollNumber: '',
    name: '',
    address: '',
    percentage: ''
  };


  // tslint:disable-next-line:typedef
  constructor(private studentService: StudentService) {
    this.getStudentsDetails();
  }

  // tslint:disable-next-line:typedef
  // @ts-ignore
  // tslint:disable-next-line:typedef
  register(registerForm: NgForm) {
    // @ts-ignore
    // @ts-ignore
    this.studentService.registerStudent(registerForm.value).subscribe(
      (res) => {
        console.log(res);
        registerForm.reset();
        this.getStudentsDetails();
      }, (error) => {
        console.log(error);
      }
    );
  }

  // tslint:disable-next-line:typedef
  getStudentsDetails() {
    this.studentService.getStudents().subscribe(
      (res) => {
        console.log(res);
        // @ts-ignore
        this.studentDetails = res;
      }, (err) => {
        console.log(err);
      }
    );
  }

  // tslint:disable-next-line:typedef
  deleteStudent(student: any) {
    this.studentService.deleteStudent(student.rollNumber).subscribe(
      (res) => {
        console.log(res);
        this.getStudentsDetails();
      }, (err) => {
        console.log(err);
      }
    );
  }

  // tslint:disable-next-line:typedef
  edit(student: any) {
    this.studentToUpdate = student;
  }

  // tslint:disable-next-line:typedef
  updateStduent() {
    this.studentService.updateStudent(this.studentToUpdate).subscribe(
      (res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      }
    );
  }
}
