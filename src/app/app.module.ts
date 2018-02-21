import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './listComponent/list.component';
import { ListService } from './list.service';
import { ComunicatorService } from './comunicator.service';
import { DetailComponent } from './detail/detail.component';
import { HeaderComponent } from './header/header.component';
import { DemoRoutingModule } from './Router/router.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DemoRoutingModule
  ],
  providers: [ListService, ComunicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
