import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { DemoHelloComponent } from './demo-hello/demo-hello.component';
import { LessonModule } from './lesson/lesson.module';
import {ClientModule} from './client/client.module'

@NgModule({
  declarations: [
    AppComponent,
    DemoComponentComponent,
    DemoHelloComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LessonModule,
    ClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// [] property binding
// {{}} : interpolation