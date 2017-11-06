import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { TestService } from './services/test/test.service';
import { AdminUserService } from './services/admin-user/admin-user.service';
import { AdminMentoringService } from './services/admin-mentoring/admin-mentoring.service';
import { LoginService } from './services/login.service';
import { ListService } from './services/spring-service/list/list.service';

import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/home/navigate/header/header.component';
import { NavigateComponent } from './components/home/navigate/navigate.component';
import { DashboardComponent } from './components/home/navigate/dashboard/dashboard.component';
import { ManualComponent } from './components/home/navigate/manual/manual.component';
import { NoticesComponent } from './components/home/navigate/notices/notices.component';
import { MentoringsComponent } from './components/home/navigate/mentorings/mentorings.component';
import { MentoringDetailsComponent } from './components/home/navigate/mentoring-details/mentoring-details.component';
import { QuestionsComponent } from './components/home/navigate/questions/questions.component';
import { UserComponent } from './components/home/navigate/user/user.component';
import { AdminComponent } from './components/home/navigate/admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AdminUserComponent } from './components/home/navigate/admin/admin-user/admin-user.component';
import { AdminMentoringSettingComponent } from './components/home/navigate/admin/admin-mentoring-setting/admin-mentoring-setting.component';
import { AdminReportComponent } from './components/home/navigate/admin/admin-report/admin-report.component';
import { AdminMentoringComponent } from './components/home/navigate/admin/admin-mentoring/admin-mentoring.component';
import { AdminMentoringListComponent } from './components/home/navigate/admin/admin-mentoring-list/admin-mentoring-list.component';
import { AdminSurveySettingComponent } from './components/home/navigate/admin/admin-survey-setting/admin-survey-setting.component';
import { AdminSurveyResultComponent } from './components/home/navigate/admin/admin-survey-result/admin-survey-result.component';
import { AdminExcelComponent } from './components/home/navigate/admin/admin-excel/admin-excel.component';
import { MentoringCreateComponent } from './components/home/navigate/mentoring-create/mentoring-create.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

// Imports Material Modules
import {
  MatSidenavModule, MatCardModule,
  MatToolbarModule, MatTooltipModule,
  MatButtonModule, MatMenuModule,
  MatCheckboxModule, MatSelectModule,
  MatIconModule, MatExpansionModule,
  MatListModule, MatFormFieldModule,
  MatTabsModule, MatProgressSpinnerModule,
  MatGridListModule, MatProgressBarModule,
  MatTableModule,
  MatSortModule,
  MatChipsModule,
  MatInputModule,
  MatDatepickerModule, MatNativeDateModule,
} from '@angular/material';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'manual', component: ManualComponent },
      { path: 'notices', component: NoticesComponent },
      { path: 'mentorings', component: MentoringsComponent },
      { path: 'mentoring/create', component: MentoringCreateComponent },
      { path: 'mentorings/:id', component: MentoringDetailsComponent },
      { path: 'questions', component: QuestionsComponent },
      { 
        path: 'admin', component: AdminComponent,
        children: [
          { path: '', component: AdminUserComponent, outlet: 'user' },
          { path: 'user', component: AdminUserComponent, outlet: 'user' },
          { path: 'report', component: AdminReportComponent, outlet: 'report' },
          { path: 'mentoring-setting', component: AdminMentoringSettingComponent, outlet: 'mentoring-setting' },
          { path: 'mentoring-list', component: AdminMentoringListComponent, outlet: 'mentoring-list' },
          { path: 'survey-setting', component: AdminSurveySettingComponent, outlet: 'survey-setting' },
          { path: 'survey-result', component: AdminSurveyResultComponent, outlet: 'survey-result' },
          { path: 'excel', component: AdminExcelComponent, outlet: 'excel' },
        ]
      },
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavigateComponent,
    DashboardComponent,
    ManualComponent,
    NoticesComponent,
    MentoringsComponent,
    MentoringDetailsComponent,
    QuestionsComponent,
    UserComponent,
    AdminComponent,
    LoginComponent,
    AdminUserComponent,
    AdminMentoringSettingComponent,
    AdminReportComponent,
    AdminMentoringComponent,
    AdminMentoringListComponent,
    AdminSurveySettingComponent,
    AdminSurveyResultComponent,
    AdminExcelComponent,
    LoadingComponent,
    MentoringCreateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    MatSidenavModule, MatCardModule,
    MatToolbarModule, MatTooltipModule,
    MatButtonModule, MatMenuModule,
    MatChipsModule, MatSelectModule,
    MatIconModule, MatExpansionModule,
    MatListModule, MatFormFieldModule,
    MatTabsModule, MatProgressSpinnerModule,
    MatTableModule, MatProgressBarModule,
    MatGridListModule,
    MatSortModule,
    HttpModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule, MatNativeDateModule,
    RouterModule.forRoot(routes),
    InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}),
  ],
  providers: [
    AuthGuard,
    TestService,
    AdminUserService,
    AdminMentoringService,
    LoginService,
    ListService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
