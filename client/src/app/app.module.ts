import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatSidenavModule} from '@angular/material';


import { AppComponent } from './app.component';
import { SidePanelComponent } from './modules/side-panel/side-panel.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { BasicSettingsComponent } from './modules/user/basic-settings/basic-settings.component';
import { MainContentComponent } from './modules/main/main-content/main-content.component';
import { MeasuresComponent } from './modules/main/measures/measures.component';
import { HighscoresComponent } from './modules/main/highscores/highscores.component';

@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    NotFoundComponent,
    BasicSettingsComponent,
    MainContentComponent,
    MeasuresComponent,
    HighscoresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
