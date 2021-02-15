import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ContainerComponent } from './components/container/container.component';
import { CardComponent } from './card/card.component';
import { EditorComponent } from './components/editor/editor.component';
import { FormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ContainerComponent,
    CardComponent,
    EditorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBqtYRp_ho7ZumuXQSO1ufVIQLeFjJAsao",
      authDomain: "notes-28a7a.firebaseapp.com",
      projectId: "notes-28a7a",
      storageBucket: "notes-28a7a.appspot.com",
      messagingSenderId: "96702100431",
      appId: "1:96702100431:web:85edc53b0fb8bab7b918ba"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
