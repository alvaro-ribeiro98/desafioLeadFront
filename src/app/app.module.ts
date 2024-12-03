import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Configurando FontAwesome
//import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { fab } from '@fortawesome/free-brands-svg-icons';
//import { far } from '@fortawesome/free-regular-svg-icons';
//import { fas } from '@fortawesome/free-solid-svg-icons';

import { FlexLayoutModule } from '@angular/flex-layout';
import { LeadModule } from './pages/lead/lead.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LeadModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(library: FaIconLibrary) {
  //   library.addIconPacks(fas, far, fab);
  // }
}
