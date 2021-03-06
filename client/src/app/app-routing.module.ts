
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';               //导入路由模块

import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import {RegistComponent} from './regist/regist.component';
import {PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClubComponent } from './club/club.component';
import { PersonalComponent } from './personal/personal.component';
import { ConfessionComponent } from './confession/confession.component';
import { DailyComponent } from './daily/daily.component';
import { ProblemDetailComponent } from './problem-detail/problem-detail.component';
import { AnswerComponent } from './answer/answer.component';
const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent
  },
  { path: 'club',
    component: ClubComponent
  },
  { path: 'personal',
    component: PersonalComponent
  },
  { path: 'confession',
    component: ConfessionComponent
  },
  { path: 'daily',
    component: DailyComponent
  },
  {
    path: 'problem-detail',
    component:ProblemDetailComponent
  },
  {
    path:'answer',
    component: AnswerComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },{
    path:'regist',
    component:RegistComponent
  },
  {
    path: '',
    redirectTo: '/regist',       //重定向路由
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],          //forRoot根路由
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
