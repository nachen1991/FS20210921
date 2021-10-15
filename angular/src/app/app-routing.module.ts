import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogAddComponent, BlogComponent, BlogEditComponent, BlogViewComponent } from './blog/componente.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import {
  ContactosAddComponent,
  ContactosEditComponent,
  ContactosListComponent,
  ContactosViewComponent,
} from './contactos/componente.component';
import { DemosComponent } from './demos/demos.component';
import { LibrosComponent } from './libros';
import { HomeComponent, PageNotFoundComponent } from './main';
import { AuthGuard, RegisterUserComponent } from './security';

//http://localhost:4200/contactos/add

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'inicio', component: HomeComponent , data: { pageTitle: 'Inicio' }},
  { path: 'demos', component: DemosComponent , data: { pageTitle: 'Demos' }},
  { path: 'chisme/de/hacer/numeros', component: CalculadoraComponent, data: { pageTitle: 'Calculadora' } },
  { path: 'contactos',
  children: [
  {path: '', component: ContactosListComponent, data: { pageTitle: 'Contactos' } },
  { path: 'add', component: ContactosAddComponent, canActivate: [AuthGuard] },
  { path: ':id/edit', component: ContactosEditComponent, canActivate: [AuthGuard] },
  { path: ':id', component: ContactosViewComponent },
  { path: ':id/:kk', component: ContactosViewComponent },

  ]},
  {
    path: 'libros',
    children: [
      { path: '', component: LibrosComponent , data: { pageTitle: 'Libros' }},
      { path: 'add', component: LibrosComponent },
      { path: ':id/edit', component: LibrosComponent },
      { path: ':id', component: LibrosComponent },
      { path: ':id/:kk', component: LibrosComponent },
    ],
  },
  {
    path: 'blog',
    children: [
      { path: '', component: BlogComponent , data: { pageTitle: 'Blog' }},
      { path: 'add', component: BlogAddComponent },
      { path: ':id/edit', component: BlogEditComponent },
      { path: ':id', component: BlogViewComponent },
      { path: ':id/:kk', component: BlogViewComponent },
    ],
  },
  { path: 'antonie/hasted', redirectTo: '/contactos/27', data: { pageTitle: 'Contacto' } },
  { path: 'config', loadChildren: () => import('./config/config.module').then(mod => mod.ConfigModule), data: { pageTitle: 'Configuración' }},
  { path: 'registro', component: RegisterUserComponent },
  { path: '404.html', component: PageNotFoundComponent, data: { pageTitle: 'Página no encontrada' } },
  { path: '**', component: PageNotFoundComponent, data: { pageTitle: 'Página no encontrada' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
