import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main';
import { AuthGuard } from './security';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'inicio', component: HomeComponent , data: { pageTitle: 'Inicio' }},
  // { path: 'actores',
  // children: [
  // {path: '', component: ActoresListComponent, data: { pageTitle: 'Actores' } },
  // { path: 'add', component: ActoresAddComponent, canActivate: [AuthGuard] },
  // { path: ':id/edit', component: ActoresEditComponent, /*canActivate: [AuthGuard] */},
  // { path: ':id', component: ActoresViewComponent },
  // { path: ':id/:kk', component: ActoresViewComponent },

  // ]},
  // {
  //   path: 'peliculas',
  //   children: [
  //     { path: '', component: PeliculasListComponent , data: { pageTitle: 'Peliculas' }},
  //     { path: 'add', component: PeliculasAddComponent },
  //     { path: ':id/edit', component: PeliculasEditComponent },
  //     { path: ':id', component: PeliculasViewComponent },
  //     { path: ':id/:kk', component: PeliculasViewComponent },
  //   ],
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
