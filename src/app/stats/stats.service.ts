import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "../../environments/environment";

const ROOT_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: "root",
})
export class StatsService {
  constructor(private http: HttpClient) {}

  getAllPizzaToppings(): Observable<any> {
    return this.http
      .get<any>(ROOT_URL)
      .pipe(
        map((data: any) => data.map((toppings: any) => Object.values(toppings)))
      );
  }
}
