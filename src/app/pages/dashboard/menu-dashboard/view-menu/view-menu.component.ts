import { Component, inject } from '@angular/core';
import { HeaderDashboardComponent } from "../../../../components/dashboard/header-dashboard/header-dashboard.component";
import { MenuCard2Component } from "../../../../components/dashboard/menu-card2/menu-card2.component";
import { MenuService } from '../../../../services/menu.service';
import { ActivatedRoute } from '@angular/router';
import { OnlyDatePipe } from '../../../../pipes/only-date.pipe';

@Component({
  selector: 'app-view-menu',
  standalone: true,
  imports: [HeaderDashboardComponent, MenuCard2Component, OnlyDatePipe],
  templateUrl: './view-menu.component.html',
  styleUrl: './view-menu.component.css'
})
export class ViewMenuComponent {

  private menuService = inject(MenuService);
  private route = inject(ActivatedRoute);
  menu: any = {};
  dishes: any[] = [];

  async ngOnInit() {
    const result = await this.menuService.getMenuById(this.route.snapshot.params['id']);
    this.menu = result.data[0];
    this.dishes = result.data[1];
    console.log(result)
    console.log(this.menu)
  }
}
