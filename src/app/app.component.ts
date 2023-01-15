import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  courses: Course = COURSES;
  courseSelected(course: Course) {
    console.log(`app component click event ${course}`, course);
  }
}
