import { CommonModule } from "@angular/common";
import { Component, NgModule, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-home-spin",
  templateUrl: "./spin.ng.html"
})
export class SpinPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: SpinPage }])
  ],
  declarations: [SpinPage]
})
export class SpinPageModule {}
