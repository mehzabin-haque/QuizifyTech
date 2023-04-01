import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  question!: string;
  category!: string;
  difficulty!: string;
  option1!: string;
  option2!: string;
  option3!: string;
  option4!: string;
  correctOption!: string;

  constructor() { }

  ngOnInit(): void {
  }

  addQuestion(): void {
    // Here you could implement the logic to save the question data to the backend, using a service or API.
    // You could create a model to represent the question data and use it to send a POST request to the server.

    // After saving the data, you could clear the form inputs or display a success message to the user.
  }
}
