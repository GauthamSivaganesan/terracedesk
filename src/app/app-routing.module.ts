
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AndroidappComponent } from './androidapp/androidapp.component';
import { AndroidgamedevComponentComponent } from './androidgamedev-component/androidgamedev-component.component';
import { AppdevelopementComponent } from './appdevelopement/appdevelopement.component';
import { BrandingComponent } from './branding/branding.component';
import { ContactComponent } from './contact/contact.component';
import { CustomisedwebdesignComponent } from './customisedwebdesign/customisedwebdesign.component';
import { DigitalmarketingComponent } from './digitalmarketing/digitalmarketing.component';
import { DynamicwebdesignComponent } from './dynamicwebdesign/dynamicwebdesign.component';
import { GamedevelopementComponent } from './gamedevelopement/gamedevelopement.component';
import { HomeComponent } from './home/home.component';
import { MobileresponsivewebdesignComponent } from './mobileresponsivewebdesign/mobileresponsivewebdesign.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { QuoteComponent } from './quote/quote.component';
import { StaticwebdesignComponent } from './staticwebdesign/staticwebdesign.component';
import { ThreedimensionaldevComponentComponent } from './threedimensionaldev-component/threedimensionaldev-component.component';
import { TwodimensionaldevComponent } from './twodimensionaldev/twodimensionaldev.component';
import { UnitydevComponentComponent } from './unitydev-component/unitydev-component.component';
import { WebappComponent } from './webapp/webapp.component';
import { WebdevelopementComponent } from './webdevelopement/webdevelopement.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/home"},
  { path: 'home', component: HomeComponent },
{ path: 'about', component:AboutComponent},
{ path: 'portfolio', component: PortfolioComponent},
{ path: 'quote', component: QuoteComponent},
{ path: 'contact', component: ContactComponent},
{ path: 'webdev', component: WebdevelopementComponent},
{ path: 'appdev', component: AppdevelopementComponent},
{ path: 'gamedev', component: GamedevelopementComponent},
{ path: 'dm', component: DigitalmarketingComponent},
{ path: 'branding', component: BrandingComponent},
{ path: 'staticwebdesign', component: StaticwebdesignComponent},
{ path: 'dynamicwebdesign', component: DynamicwebdesignComponent},
{ path: 'customwebdesign', component: CustomisedwebdesignComponent},
{ path: 'mobileresponsivewebdesign', component: MobileresponsivewebdesignComponent},
{ path: 'mobileresponsivewebdesign', component: WebappComponent},
{ path: 'mobileresponsivewebdesign', component: AndroidappComponent},
{ path: '2Dgamedev', component: TwodimensionaldevComponent},
{ path: '3Dgamedev', component: ThreedimensionaldevComponentComponent},
{ path: 'unitygamedev', component: UnitydevComponentComponent},
{ path: 'androidgamedev', component: AndroidgamedevComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
