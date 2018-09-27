import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostPage } from './post';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    PostPage,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(PostPage),
  ],
})
export class PostPageModule {}