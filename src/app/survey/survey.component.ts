import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { SurveyModel } from "survey-angular";
import * as Survey from "survey-angular";

@Component({
  selector: "app-survey",
  templateUrl: "./survey.component.html",
  styleUrls: ["./survey.component.scss"],
})
export class SurveyComponent implements OnInit {
  @Input() surveyJson: {};
  private surveyModel: SurveyModel;

  constructor() {}

  ngOnInit(): void {
    this.surveyModel = new Survey.Model(this.surveyJson);
    Survey.SurveyNG.render("suveryElement", { model: this.surveyModel });
  }
}
