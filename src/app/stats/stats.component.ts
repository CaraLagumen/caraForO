import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { StatsService } from "./stats.service";
import { Toppings } from "../models/topping.model";

@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.scss"],
})
export class StatsComponent implements OnInit, OnDestroy {
  private toppingsSub: Subscription;

  allToppings: any[];

  allToppingsCount: object[] = [];
  sortedAllToppingsCount: [string, object][] = [];

  isLoaded = false;
  showMore = false;
  showAllOrdered = false;
  start = 0;
  end = 100;

  constructor(private statsService: StatsService) {}

  ngOnInit() {
    this.toppingsSub = this.statsService
      .getAllPizzaToppings()
      .subscribe((data: Toppings[]) => {
        this.allToppings = data.flat();

        //COUNT TOPPINGS
        this.allToppings.forEach((toppings: string[]) =>
          toppings.forEach(
            (topping: string) =>
              (this.allToppingsCount[topping] =
                this.allToppingsCount[topping] + 1 || 1)
          )
        );

        //FORMAT TOPPINGS
        this.sortedAllToppingsCount = Object.entries(
          this.allToppingsCount
        ).sort((x, y) => (y[1] as any) - (x[1] as any));

        this.isLoaded = true;
      });
  }

  onShowMore() {
    this.showMore = !this.showMore;
  }

  onShowAllOrdered() {
    this.showAllOrdered = !this.showAllOrdered;
  }

  onForward() {
    this.start += 100;
    this.end += 100;
  }

  onBackward() {
    this.start -= 100;
    this.end -= 100;
  }

  ngOnDestroy() {
    this.toppingsSub.unsubscribe();
  }
}
