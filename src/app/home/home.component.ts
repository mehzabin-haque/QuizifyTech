import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any[]=[]
  examList:any[]=[]
  showCard:boolean=false;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
