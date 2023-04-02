import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../models/api-response';

@Component({
  selector: 'app-regi',
  templateUrl: './regi.component.html',
  styleUrls: ['./regi.component.css']
})
export class RegiComponent implements OnInit {
  constructor(private http: HttpClient) { }
  // @ViewChild('container') container!: ElementRef;
  name:string='';
  email:string='';
  password:string='';
  message:string='';

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
}
