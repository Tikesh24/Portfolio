import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { HomeComponent } from './portfolio/component/home/home.component';
import { AboutComponent } from './portfolio/component/about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperienceComponent } from './portfolio/component/experience/experience.component';
import { SkillsComponent } from './portfolio/component/skills/skills.component';
import { ContactComponent } from './portfolio/component/contact/contact.component';
import { BlogCompnentComponent } from './blog/blog-compnent/blog-compnent.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogTimelineComponent } from './blog/blog-timeline/blog-timeline.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EditPanelComponent } from './admin/dashboard/edit-panel/edit-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ParallaxComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactComponent,
    BlogCompnentComponent,
    PortfolioComponent,
    BlogTimelineComponent,
    BlogDetailsComponent,
    AdminComponent,
    LoginComponent,
    DashboardComponent,
    EditPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
