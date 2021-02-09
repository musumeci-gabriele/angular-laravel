import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { ListAdminComponent } from './admin/list-admin/list-admin.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
// * abilitiamo il servizio HTTP
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './admin/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminUserCreateComponent } from './admin/admin-user-create/admin-user-create.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HomeAdminComponent,
    ListAdminComponent,
    NavbarComponent,
    DashboardComponent,
    AdminUserCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
