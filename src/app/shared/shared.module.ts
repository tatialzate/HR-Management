import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceService } from './services/resource.service';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ErrorPageComponent],
  providers: [ResourceService]
})
export class SharedModule { }
