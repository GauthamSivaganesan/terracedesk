import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { QuoteComponent } from './quote/quote.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { WebdevelopementComponent } from './webdevelopement/webdevelopement.component';
import { AppdevelopementComponent } from './appdevelopement/appdevelopement.component';
import { GamedevelopementComponent } from './gamedevelopement/gamedevelopement.component';
import { DigitalmarketingComponent } from './digitalmarketing/digitalmarketing.component';
import { BrandingComponent } from './branding/branding.component';
import { TwodimensionaldevComponent } from './twodimensionaldev/twodimensionaldev.component';
import { StaticwebdesignComponent } from './staticwebdesign/staticwebdesign.component';
import { DynamicwebdesignComponent } from './dynamicwebdesign/dynamicwebdesign.component';
import { CustomisedwebdesignComponent } from './customisedwebdesign/customisedwebdesign.component';
import { MobileresponsivewebdesignComponent } from './mobileresponsivewebdesign/mobileresponsivewebdesign.component';
import { WebappComponent } from './webapp/webapp.component';
import { AndroidappComponent } from './androidapp/androidapp.component';
import { ThreedimensionaldevComponentComponent } from './threedimensionaldev-component/threedimensionaldev-component.component';
import { UnitydevComponentComponent } from './unitydev-component/unitydev-component.component';
import { AndroidgamedevComponentComponent } from './androidgamedev-component/androidgamedev-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    QuoteComponent,
    PortfolioComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    WebdevelopementComponent,
    AppdevelopementComponent,
    GamedevelopementComponent,
    DigitalmarketingComponent,
    BrandingComponent,
    TwodimensionaldevComponent,
    StaticwebdesignComponent,
    DynamicwebdesignComponent,
    CustomisedwebdesignComponent,
    MobileresponsivewebdesignComponent,
    WebappComponent,
    AndroidappComponent,
    ThreedimensionaldevComponentComponent,
    UnitydevComponentComponent,
    AndroidgamedevComponentComponent
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
