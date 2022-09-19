import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ImagensAleatoriasComponent } from './imagens-aleatorias/imagens-aleatorias.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    SideBarComponent,
    ImagensAleatoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
