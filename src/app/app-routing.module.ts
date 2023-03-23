import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { RegisterComponent } from './component/register/register.component';
import { EmptyComponent } from './layout/empty/empty.component';
import { FullComponent } from './layout/full/full.component';

const routes: Routes = [
  {
    path: "",
    component: EmptyComponent,
    children: [
      {
        path: "",
        component: LogInComponent
      },
      {
        path: "login",
        component: LogInComponent
      },
      {
        path: "register",
        component: RegisterComponent
      }
    ]
  },
  {
    path: "full",
    component: FullComponent,
    children: [ 
      {
        path: "dashboard",
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
