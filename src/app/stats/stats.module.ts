import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { StatsRoutingModule } from './stats.routing.module';
import { StatsComponent } from "./stats.component";
import { StatsToppingsComponent } from "./stats-toppings/stats-toppings.component";

@NgModule({
  declarations: [StatsComponent, StatsToppingsComponent],
  imports: [CommonModule, RouterModule, StatsRoutingModule],
})
export class StatsModule {}
