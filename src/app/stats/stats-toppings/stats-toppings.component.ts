import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-stats-toppings",
  templateUrl: "./stats-toppings.component.html",
  styleUrls: ["./stats-toppings.component.scss"],
})
export class StatsToppingsComponent implements OnInit {
  @Input() toppings: string[];

  constructor() {}

  ngOnInit() {
  }
}
