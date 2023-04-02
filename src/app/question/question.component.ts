import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit{
  questions:any=[];
  examId: number | undefined;
  quesrion_count = 0
  show:boolean=false
  buttonTitile:string='Next'
  stopTimer:any;
  time=0;
  dt=new Date(new Date().setTime(0))
  ctime=this.dt.getTime()
  seconds=Math.floor((this.ctime%(1000*60))/1000)
  minutes=Math.floor((this.ctime%(1000*60*60))/(1000*60))
  formated_sec:any="00"
  formated_min:any="00"
  userAnswer=''
  correctAnswer: number=0;
  
  constructor(){}
  
  ngOnInit(): void {
    this.formated_min='00'
    this.formated_sec='00'
    this.time=0
    this.timer()
    throw new Error('Method not implemented.');
  }

  timer(){
    this.stopTimer = setInterval(()=>{
      this.time++
      if(this.seconds<59){
        this.seconds++
      }
      else{
        this.seconds=0;
        this.minutes++
      }

      this.formated_sec = this.seconds<10 ? `0${this.seconds}`:`${this.seconds}`
      this.formated_min = this.minutes<10 ? `0${this.minutes}`:`${this.minutes}`
    },1000)
  }

  toggleClass(item?:any){
    if(item==0){
      this.userAnswer="A"
    }
    else if(item==1){
      this.userAnswer="B"
    }
    else if(item==2){
      this.userAnswer="C"
    }
    else {
      this.userAnswer="D"
    }

    if(this.userAnswer=="somthing"){
      this.correctAnswer++
    }
  }

  next(){

  }

}
