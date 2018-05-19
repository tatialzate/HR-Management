import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceService } from './services/resource.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ResourceService]
})
export class SharedModule { }
