import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Routing Components
import { AppComponent } from './routes/_app/app.component';
import { IndexComponent } from './routes/index/index.component';
import { FourohfourComponent } from './routes/fourohfour/fourohfour.component';

// Shared Components
import { HeaderComponent } from './components/_shared/header/header.component';
import { FooterComponent } from './components/_shared/footer/footer.component';
import { BrandComponent } from './components/_shared/brand/brand.component';
import { IndexHeadingComponent } from './components/index/index-heading/index-heading.component';
import { IndexPubgTrackerComponent } from './components/index/index-pubg-tracker/index-pubg-tracker.component';
import { IndexContactComponent } from './components/index/index-contact/index-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FourohfourComponent,
    HeaderComponent,
    FooterComponent,
    BrandComponent,
    IndexHeadingComponent,
    IndexPubgTrackerComponent,
    IndexContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: IndexComponent },
      { path: '**', component: FourohfourComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
