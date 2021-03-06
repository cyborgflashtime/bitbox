import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswdModule } from './passwd/passwd.module';
import { DescriptionModule } from './description/description.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PasswdModule,
    FormsModule,
    DescriptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
