import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterOutlet } from '@angular/router';

import { Menu } from './shared/menu/menu.component';
import { MenuService } from './shared/menu/menu.service';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Belle Biju';
  isMenu: Menu[] = [];

  constructor(
    private menuService: MenuService,
    private titleService: Title,
    private router: Router
  ) {
    this.menuService._menu.subscribe((menu) => {
      this.isMenu = menu;
    });
  }
  ngOnInit() {}

  ngAfterViewInit(): void {
    this.menuService._menu.next([]);
    // this.menuService.updateMenu();
  }
}
