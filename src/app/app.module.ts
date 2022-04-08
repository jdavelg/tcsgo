import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {IvyCarouselModule} from 'angular-responsive-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuModule } from 'primeng/menu'; // add this import
import { HTTP_INTERCEPTORS, HttpClientModule, HttpHeaders } from "@angular/common/http"; // Import 
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { ChartModule } from 'primeng/chart';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { SharedModule } from 'primeng/api';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { CheckboxModule } from 'primeng/checkbox';
import { TooltipModule } from 'primeng/tooltip';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CardModule } from 'primeng/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Menubar, MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import {CarouselModule} from 'primeng/carousel';
import {ImageModule} from 'primeng/image';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BannerComponent } from './components/banner/banner.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarouselComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenuModule,
    FormsModule,
    DynamicDialogModule,
    AppRoutingModule,
    ToolbarModule,
    HttpClientModule,
    SharedModule,
    TooltipModule,
    TableModule,
    ChartModule,
    ImageModule,
    CarouselModule,
    SliderModule,
    CheckboxModule,
    ConfirmDialogModule,
    DialogModule,
    CardModule,
    DividerModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    MenubarModule,
    ProgressBarModule,
    InputNumberModule,
    CalendarModule,
    IvyCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
