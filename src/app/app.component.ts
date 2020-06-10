import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
      
  public surveyJson: {} = {
    "questions": [
        {
            "type": "radiogroup",
            "name": "one",
            "title": "Radiogroup question (green)",
            "choices": ["Yes", "No"]
        }, {
            "type": "checkbox",
            "name": "two",
            "title": "Checkbox question (orange)",
            "choices": ["One", "Two"]
        }, {
            "type": "radiogroup",
            "name": "three",
            "title": "Required question (red title)",
            "isRequired": true,
            "choices": ["Yes", "No"]
        }

    ]};
}
