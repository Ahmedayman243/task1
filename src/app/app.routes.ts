import { Routes } from '@angular/router';
import { NotFunedComponent } from './not-funed/not-funed.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './content/about/about.component';
import { ProtfolioComponent } from './content/protfolio/protfolio.component';
import { ContactComponent } from './content/contact/contact.component';
import { GallaryComponent } from './content/gallary/gallary.component';

export const routes: Routes = [
 {path: "", redirectTo: "home", pathMatch: "full"},
{path:"home",component:HomeComponent},
{path:"About",component:AboutComponent},
{path:"Protofolio",component:ProtfolioComponent},
{path:"contact",component:ContactComponent},
{path:"gallary",component:GallaryComponent},

{path: "**", component:NotFunedComponent}
];
