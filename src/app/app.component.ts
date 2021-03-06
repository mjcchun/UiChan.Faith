import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { merge } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { environment } from '@env/environment';
import { slideInAnimation } from '@core/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [slideInAnimation]
})

export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private translateService: TranslateService,
  ) { }

  ngOnInit() {

    // const onNavigationEnd = this.router.events.pipe(filter((event) => event instanceof NavigationEnd));

    // // Change page title on navigation or language change, based on route data
    // merge(this.translateService.onLangChange, onNavigationEnd)
    //   .pipe(
    //     map(() => {
    //       let route = this.activatedRoute;
    //       while (route.firstChild) {
    //         route = route.firstChild;
    //       }
    //       return route;
    //     }),
    //     filter((route) => route.outlet === 'primary'),
    //     switchMap((route) => route.data),
    //   )
    //   .subscribe((event) => {
    //     const title = event.title;
    //     if (title) {
    //       this.titleService.setTitle(this.translateService.instant(title));
    //     }
    //   });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }

  ngOnDestroy() {
  }
}
