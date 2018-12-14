import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { simpleReducer } from './reducer/simple.reducer';
import { postReducer } from './reducer/post.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	StoreModule.forRoot({
		post: postReducer,
		message: simpleReducer 
	})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
