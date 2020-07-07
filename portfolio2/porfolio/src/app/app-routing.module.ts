import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogCompnentComponent} from './blog/blog-compnent/blog-compnent.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {AdminComponent} from './admin/admin.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'blog', component: BlogCompnentComponent },
  { path: 'admin-page', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
