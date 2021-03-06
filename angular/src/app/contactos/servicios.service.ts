import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NotificationService } from '../common-services';
import { LoggerService } from 'src/lib/my-core';
import { ModoCRUD } from '../base-code/tipos';
import { Router } from '@angular/router';
import { AuthService, AUTH_REQUIRED } from '../security';


export class Contactos {
  id: number = 0;
  tratamiento: string | null = null;
  nombre: string | null = null;
  apellidos: string | null = null;
  telefono: string | null = null;
  email: string | null = null;
  sexo: string | null = null;
  nacimiento: string | null = null;
  avatar: string | null = null;
  conflictivo: boolean = false;
}
export abstract class RESTDAOService<T, K> {
 protected baseUrl = environment.apiURL;
 constructor(protected http: HttpClient, entidad: string, protected option = {}) {
 this.baseUrl += entidad;
 }
 query(): Observable<Array<T>> {
 return this.http.get<Array<T>>(this.baseUrl, this.option);
 }
 get(id: K): Observable<T> {
 return this.http.get<T>(this.baseUrl + '/' + id, this.option);
 }
 add(item: T): Observable<T> {
 return this.http.post<T>(this.baseUrl, item, this.option);
 }
 change(id: K, item: T): Observable<T> {
 return this.http.put<T>(this.baseUrl + '/' + id, item, this.option);
 }
 remove(id: K): Observable<T> {
 return this.http.delete<T>(this.baseUrl + '/' + id, this.option);
 }
}


@Injectable({
  providedIn: 'root'
 })
 export class ContactosDAOService extends RESTDAOService<any, any> {
  constructor(http: HttpClient) {
  super(http, 'contactos', {
  context: new HttpContext().set(AUTH_REQUIRED, true)
  });
  }
 }
@Injectable({
  providedIn: 'root'
})
export class ContactosViewModelService{
  protected listURL = '/contactos';
  protected modo: ModoCRUD = 'list';
  protected listado: Array<any> = [];
  protected elemento: any = {};
  protected idOriginal: any = null;
  constructor(protected notify: NotificationService, protected out: LoggerService, protected dao: ContactosDAOService,
    protected router: Router, public auth:AuthService,) { }

  public get Modo(): ModoCRUD { return this.modo; }
  public get Listado(): Array<any> { return this.listado; }
  public get Elemento(): any { return this.elemento; }

  public list(): void {
    this.dao.query().subscribe(
    data => {
    this.listado = data;
    this.modo = 'list';
    },
    err => this.notify.add(err.message)
    );
  }
  public add(): void {
    this.elemento = {};
    this.modo = 'add';
  }
  public edit(key: any): void {
    this.dao.get(key).subscribe(
    data => {
    this.elemento = data;
    this.idOriginal = key;
    this.modo = 'edit';
    },
    err => this.notify.add(err.message)
    );
  }
  public view(key: any): void {
    this.dao.get(key).subscribe(
    data => {
    this.elemento = data;
    this.modo = 'view';
    },
    err => this.notify.add(err.message)
    );
  }
  public delete(key: any): void {
    if (!window.confirm('??Seguro?')) { return; }
    this.dao.remove(key).subscribe(
    data => this.list(),//this.load(),
    err => this.notify.add(err.message)
    );
  }

  clear() {
    this.elemento = {};
    this.idOriginal = null;
    this.listado = [];
  }

  public cancel(): void {
    this.elemento = {};
    this.idOriginal = null;
    this.router.navigateByUrl(this.listURL);
  }

  public send(): void {
    switch (this.modo) {
    case 'add':
    this.dao.add(this.elemento).subscribe(
    data => this.cancel(),
    err => this.notify.add(err.message)
    );
    break;
    case 'edit':
    this.dao.change(this.idOriginal, this.elemento).subscribe(
    data => this.cancel(),
    err => this.notify.add(err.message)
    );
    break;
    case 'view':
    break;
    }
  }
  // page = 0;
  // totalPages = 0;
  // totalRows = 0;
  // rowsPerPage = 8;
  // load(page: number = -1) {
  //   if(page < 0) page = this.page
  //   this.dao.page(page, this.rowsPerPage).subscribe(
  //     rslt => {
  //       this.page = rslt.page;
  //       this.totalPages = rslt.pages;
  //       this.totalRows = rslt.rows;
  //       this.listado = rslt.list;
  //       this.modo = 'list';
  //     },
  //     err => this.notify.add(err.message)
  //   )
  // }



}
