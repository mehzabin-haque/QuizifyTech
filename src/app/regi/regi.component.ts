import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../models/api-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regi',
  templateUrl: './regi.component.html',
  styleUrls: ['./regi.component.css']
})
export class RegiComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) { }
  // @ViewChild('container') container!: ElementRef;
  name:string='';
  email:string='';
  password:string='';
  message:string='';
  loginMessage:string='';

  ngOnInit(): void {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    
    signUpButton?.addEventListener('click', () => {
      container?.classList.add("right-panel-active");
    });
    
    signInButton?.addEventListener('click', () => {
      container?.classList.remove("right-panel-active");
    }); 
  }
  onSubmit(name: string, email: string, password: string): void {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);

    this.http.post<ApiResponse>('http://localhost/project/saveData.php', formData).subscribe(response => {
  console.log(response);
  if (response && response.message) {
    this.message = response.message;
  }
  });
  }
  onLoginSubmit(email: string, password: string) {
  
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
  
    this.http.post<ApiResponse>('http://localhost/project/login.php', formData).subscribe(response => {
      if (response.success== true) {
        console.log(response);
        if(response.type== 'user'){
          this.router.navigate(['/home']);
        }
        else{
          this.router.navigate(['/admin']);
        }
        
      } else {
        this.loginMessage = response.message;
      }
    });
}
}
