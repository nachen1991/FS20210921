import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { LoggerService } from 'src/lib/my-core';
import { NotificationService } from '../common-services';
import { BlogViewModelService, Blog } from './servicios.service';

export class DAOServiceMock<T, K> {
  constructor(private listado: Array<T>) {}
  query(): Observable<Array<T>> {
    return of(this.listado);
  }
  get(id: number): Observable<T> {
    return of(this.listado[id]);
  }
  add(item: T): Observable<T> {
    this.listado.push(item);
    return of(item);
  }
  change(id: number, item: T): Observable<T> {
    this.listado[id] = item;
    return of(item);
  }
  remove(id: number): Observable<T> {
    let item = this.listado[id];
    this.listado.slice(id, 1);
    return of(item);
  }
}

class BlogDAOService extends DAOServiceMock<Blog, number> {
  constructor() {
    super([
      {
        id: 1,
        titulo: 'Saludo',
        texto:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eveniet eum nisi expedita ab dolorum labore similique provident officia ipsa, aliquam recusandae dicta id, praesentium quasi consequatur minus laborum perferendis?',
        autor: 'Javier',
        fecha: '2016-02-29',
        //megusta: 0,
        fotourl:
          'https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg',
      },
      {
        id: 2,
        titulo: 'Angular 4.3 Now Available',
        texto:
          '<p>Angular version 4.3 has been released. This is a minor release following our announced adoption of Semantic Versioning, meaning that it contains no breaking changes and that it is a drop-in replacement for 4.x.x.</p><h2>What’s new?</h2><ul><li>We are introducing HttpClient, a smaller, easier to use, and more powerful library for making HTTP Requests. Learn more about it from our docs.</li><li>New router life cycle events for Guards and Resolvers. Four new events: GuardsCheckStart, GuardsCheckEnd, ResolveStart, ResolveEnd join the existing set of life cycle event such as NavigationStart.</li><li>Conditionally disable animations via a new attribute, [@.disabled]</li><li>Support for the emulated /deep/ CSS Selector (the Shadow-Piercing descendant combinator aka >>>) has been deprecated to match browser implementations and Chrome’s intent to remove. ::ng-deep has been added to provide a temporary workaround for developers currently using this feature.</li></ul>',
        autor: 'Stephen Fluin',
        fecha: '2017-07-18',
        //megusta: 0,
        fotourl:
          'https://cdn-images-1.medium.com/max/800/1*nbJ41jD1-r2Oe6FsLjKaOg.png',
      },
      {
        id: 3,
        titulo: 'Version 5.0.0 of Angular Now Available',
        texto:
          '<p>We are pleased to announce version 5.0.0 of Angular, pentagonal-donut. This is a major release containing new features and bugfixes. This release continues our focus on making Angular smaller, faster, and easier to use.</p>\n<p>Here’s a breakdown of some of the biggest changes in v5. For the full list, please see the changelog.</p>\n<h2>What’s new?</h2>\n<ul>\n<li>Build Optimizer</li>\n<li>Angular Universal State Transfer API and DOM Support</li>\n<li>Compiler Improvements</li>\n<li>Internationalized Number, Date, and Currency Pipes</li>\n<li>Replace the ReflectiveInjector with StaticInjector</li>\n<li>Zone speed improvements</li>\n<li>HttpClient</li>\n<li>CLI v1.5</li>\n</ul>',
        autor: 'Stephen Fluin',
        fecha: '2017-09-01',
        fotourl:
          'https://cdn-images-1.medium.com/max/800/1*nbJ41jD1-r2Oe6FsLjKaOg.png',
      },
      {
        id: 4,
        texto:
          '<p>We are pleased to announce version 5.1.0 of Angular. This is a minor release containing several smaller features and bugfixes. We are also releasing v1.6 of the Angular CLI, and the first stable release of Angular Material.</p>\n<p>New Angular releases to celebrate the holidays!</p>\n<h3>What’s new?</h3>\n<ul>\n<li>Angular Material & CDK Stable Release</li>\n<li>Service Worker support in the CLI</li>\n<li>Improved Universal & AppShell Support in the CLI</li>\n<li>Improved decorator error messages</li>\n<li>TypeScript 2.5 support</li>\n</ul>\n<p>For the complete list of features and bugfixes please see the Angular, Material, and CLI changelogs.</p>\n',
        titulo: 'Angular 5.1 & More Now Available',
        autor: 'Stephen Fluin',
        fecha: '2017-12-06',
        fotourl:
          'https://cdn-images-1.medium.com/max/800/1*b1YXMZFX0o_tt6_9_EkGEg.jpeg',
      },
    ]);
  }
}
fdescribe('BlogViewModelService', () => {
  let service: BlogViewModelService;
  let dao: BlogDAOService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        NotificationService,
        LoggerService,
        { provide: BlogDAOService, useClass: BlogDAOService },
        //   {provide: BlogDAOService, factory: () => () => new DAOServiceMock<Blog, number>([
        //   {
        // "id": 1,
        // "titulo": "Saludo",
        // "texto": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eveniet eum nisi expedita ab dolorum labore similique provident officia ipsa, aliquam recusandae dicta id, praesentium quasi consequatur minus laborum perferendis?",
        // "autor": "Javier",
        // "fecha": "2016-02-29",
        // "megusta": 0,
        // "fotourl": "https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg"
        // },
        // {
        // "id": 2,
        // "titulo": "Angular 4.3 Now Available",
        // "texto": "<p>Angular version 4.3 has been released. This is a minor release following our announced adoption of Semantic Versioning, meaning that it contains no breaking changes and that it is a drop-in replacement for 4.x.x.</p><h2>What’s new?</h2><ul><li>We are introducing HttpClient, a smaller, easier to use, and more powerful library for making HTTP Requests. Learn more about it from our docs.</li><li>New router life cycle events for Guards and Resolvers. Four new events: GuardsCheckStart, GuardsCheckEnd, ResolveStart, ResolveEnd join the existing set of life cycle event such as NavigationStart.</li><li>Conditionally disable animations via a new attribute, [@.disabled]</li><li>Support for the emulated /deep/ CSS Selector (the Shadow-Piercing descendant combinator aka >>>) has been deprecated to match browser implementations and Chrome’s intent to remove. ::ng-deep has been added to provide a temporary workaround for developers currently using this feature.</li></ul>",
        // "autor": "Stephen Fluin",
        // "fecha": "2017-07-18",
        // "megusta": 0,
        // "fotourl": "https://cdn-images-1.medium.com/max/800/1*nbJ41jD1-r2Oe6FsLjKaOg.png"
        // },
        // {
        // "id": 3,
        // "titulo": "Version 5.0.0 of Angular Now Available",
        // "texto": "<p>We are pleased to announce version 5.0.0 of Angular, pentagonal-donut. This is a major release containing new features and bugfixes. This release continues our focus on making Angular smaller, faster, and easier to use.</p>\n<p>Here’s a breakdown of some of the biggest changes in v5. For the full list, please see the changelog.</p>\n<h2>What’s new?</h2>\n<ul>\n<li>Build Optimizer</li>\n<li>Angular Universal State Transfer API and DOM Support</li>\n<li>Compiler Improvements</li>\n<li>Internationalized Number, Date, and Currency Pipes</li>\n<li>Replace the ReflectiveInjector with StaticInjector</li>\n<li>Zone speed improvements</li>\n<li>HttpClient</li>\n<li>CLI v1.5</li>\n</ul>",
        // "autor": "Stephen Fluin",
        // "fecha": "2017-09-01",
        // "fotourl": "https://cdn-images-1.medium.com/max/800/1*nbJ41jD1-r2Oe6FsLjKaOg.png"
        // },
        // {
        // "id": 4,
        // "texto": "<p>We are pleased to announce version 5.1.0 of Angular. This is a minor release containing several smaller features and bugfixes. We are also releasing v1.6 of the Angular CLI, and the first stable release of Angular Material.</p>\n<p>New Angular releases to celebrate the holidays!</p>\n<h3>What’s new?</h3>\n<ul>\n<li>Angular Material & CDK Stable Release</li>\n<li>Service Worker support in the CLI</li>\n<li>Improved Universal & AppShell Support in the CLI</li>\n<li>Improved decorator error messages</li>\n<li>TypeScript 2.5 support</li>\n</ul>\n<p>For the complete list of features and bugfixes please see the Angular, Material, and CLI changelogs.</p>\n",
        // "titulo": "Angular 5.1 & More Now Available",
        // "autor": "Stephen Fluin",
        // "fecha": "2017-12-06",
        // "fotourl": "https://cdn-images-1.medium.com/max/800/1*b1YXMZFX0o_tt6_9_EkGEg.jpeg"
        // },
        // ]) } ],
      ],
    });
    service = TestBed.inject(BlogViewModelService);
    dao = TestBed.inject(BlogDAOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('DAOServiceMock Query', (done: DoneFn) => {
    dao.query().subscribe(
      (data) => {
        expect(data.length).toBe(4);
        done();
      },
      () => fail()
    );
  });

  it('list', fakeAsync(() => {
    service.list();
    tick();
    expect(service.Listado.length).toBe(4);
    expect(service.Modo).toBe('list');
  }));
});
