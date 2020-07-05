import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperienceComponent } from './component/experience/experience.component';
import { SkillsComponent } from './component/skills/skills.component';
import { ContactComponent } from './component/contact/contact.component';
import { BlogCompnentComponent } from './blog/blog-compnent/blog-compnent.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogTimelineComponent } from './blog/blog-timeline/blog-timeline.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';

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
    BlogDetailsComponent
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
