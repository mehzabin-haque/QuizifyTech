import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../models/api-response';

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
  correctOption: number=0;
  message!: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  addQuestion(question:string,category:string,difficulty:string,option1:string,option2:string,option3:string,option4:string,correctOption:number): void {
    const questionData = new FormData();
    questionData.append('question',question);
    questionData.append('category',category);
    questionData.append('difficulty',difficulty);
    questionData.append('option1',option1);
    questionData.append('option2',option2);
    questionData.append('option3',option3);
    questionData.append('option4',option4);
    questionData.append('correctOption',correctOption.toString());

    this.http.post<ApiResponse>('http://localhost/project/addQuestion.php', questionData).subscribe(response => {
      if (response.success== true) {
        this.message= response.message;
      }
    });
  }
}
