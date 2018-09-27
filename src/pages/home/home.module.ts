import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
