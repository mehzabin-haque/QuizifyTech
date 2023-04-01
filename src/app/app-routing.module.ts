import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegiComponent } from './regi/regi.component';

const routes: Routes = [
  {path:'',redirectTo:'/welcome',pathMatch:'full'},
  {path:'welcome',component:WelcomeComponent},
  {path:'login',component:LoginComponent},
  {path:'regi',component:RegiComponent},
  {path:'home',component:HomeComponent},
  {path:'question',component:QuestionComponent},
  {path:'result',component:ResultComponent},
  {path:'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
