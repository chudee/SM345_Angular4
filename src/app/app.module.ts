import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { TestService } from './test/test.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './navigate/header/header.component';
import { NavigateComponent } from './navigate/navigate.component';
import { DashboardComponent } from './navigate/dashboard/dashboard.component';
import { ManualComponent } from './navigate/manual/manual.component';
import { NoticesComponent } from './navigate/notices/notices.component';
import { MentoringsComponent } from './navigate/mentorings/mentorings.component';
import { QuestionsComponent } from './navigate/questions/questions.component';
import { UserComponent } from './navigate/user/user.component';
import { AdminComponent } from './navigate/admin/admin.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

// Imports Material Modules
import {
  MdSidenavModule,
  MdToolbarModule,
  MdButtonModule,
  MdCheckboxModule,
  MdIconModule,
  MdListModule,
  MdTabsModule,
  MdGridListModule,
  MdTableModule,
  MdSortModule,
  MdChipsModule,
} from '@angular/material';
import { AdminUserComponent } from './navigate/admin/admin-user/admin-user.component';


const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'manual', component: ManualComponent},
  { path: 'notices', component: NoticesComponent},
  { path: 'mentorings', component: MentoringsComponent},
  { path: 'questions', component: QuestionsComponent},
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigateComponent,
    DashboardComponent,
    ManualComponent,
    NoticesComponent,
    MentoringsComponent,
    QuestionsComponent,
    UserComponent,
    AdminComponent,
    LoginComponent,
    AdminUserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    MdChipsModule,
    MdIconModule,
    MdListModule,
    MdTabsModule,
    MdTableModule,
    MdGridListModule,
    MdSortModule,
    HttpModule,
    MdCheckboxModule,
    RouterModule.forRoot(routes),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [
    TestService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
