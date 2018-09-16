import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { MainContentComponent } from './component/main-page/main-content/main-content.component';
import { ContentComponent } from './component/main-page/main-content/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainContentComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
