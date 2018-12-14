import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';  //<<<< import it here
import { AppRoutingModule } from './app-routing.module';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
	FormsModule,
	StoreModule.forRoot({
		post: postReducer,
		message: simpleReducer 
	}),
	StoreDevtoolsModule.instrument({
		maxAge: 10 // number of states to retain
	})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
