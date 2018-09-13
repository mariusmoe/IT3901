import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { MainContentComponent } from './modules/main/main-content/main-content.component';
 

 
const appRoutes: Routes = [
  { path: 'home', component: MainContentComponent },
  { path: '**', component:  NotFoundComponent}
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}