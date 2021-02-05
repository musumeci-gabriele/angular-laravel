import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {HomeComponent} from './components/home/home.component';

// * NOTA: L’API agisce proprio come un middleware . Quando inviamo richieste a un’API, essa controlla le richieste. Se le richieste sono consentite, i dati verranno restituiti. Vengono restituite anche risposte adeguate per farci conoscere il risultato delle nostre richieste.

// * path(indica il percorso) poi il valore. chiave Component con il componente da seguire. path:'' significa che in indirizzo semplice lui mandera' alla home.
// * pathMatch , che viene utilizzata per indicare come si desidera abbinare un URL al percorso di una rotta.
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }