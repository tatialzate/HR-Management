import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { AuthorizatedGuard } from './core/guards/authorizated.guard';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';

const routes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
        canActivate: [AuthorizatedGuard]
    },
    {
        path: 'employees',
        loadChildren: './employees/employees.module#EmployeesModule',
        canActivate: [AuthorizatedGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full',
    },
    {
        path: '**', component: ErrorPageComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
