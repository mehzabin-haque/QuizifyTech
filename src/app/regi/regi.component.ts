import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-regi',
  templateUrl: './regi.component.html',
  styleUrls: ['./regi.component.css']
})
export class RegiComponent implements OnInit {
  // @ViewChild('container') container!: ElementRef;

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
}
