import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectProjectCodexComponent } from './project-project-codex/project-project-codex.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ProjectProjectCodexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
