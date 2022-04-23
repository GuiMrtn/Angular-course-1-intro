import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
//On importe notre composant AppComponant. Cela est possible car on l'a exporté du fichier app.component.ts
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    //C'est ici qu'on déclare nos composants
    AppComponent
  ],
  imports: [
    //C'est ici qu'on importe les modules qui seront utilisés dans notre projet
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  //Ici, le bootstrap va démmarer l'application. Ici, la première chose que verra l'utilisateur ce sera le template de AppComponent, ici, la balise h1 de app.component.ts
  bootstrap: [AppComponent]
})
export class AppModule { }
