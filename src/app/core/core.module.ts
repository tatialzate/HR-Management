import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './services/authentication.service';
import { AuthorizatedGuard } from './guards/authorizated.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthenticationService, AuthorizatedGuard]
})
export class CoreModule { }
