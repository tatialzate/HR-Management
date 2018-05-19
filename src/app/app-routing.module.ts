import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { AuthorizatedGuard } from './core/guards/authorizated.guard';

const routes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
        canLoad: [AuthorizatedGuard]
    },
    {
        path: 'employees',
        loadChildren: './employees/employees.module#EmployeesModule',
        canLoad: [AuthorizatedGuard]
    },
    {
        path: 'projects',
        loadChildren: './projects/projects.module#ProjectsModule',
        canLoad: [AuthorizatedGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
