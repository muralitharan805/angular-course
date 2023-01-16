import { Component, ElementRef, ViewChild } from "@angular/core";
import { COURSES } from "../db-data";
import { CourseCardComponent } from "./course-card/course-card.component";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("getCourse")
  getCourse: CourseCardComponent;

  @ViewChild("getDiv")
  getDiv: ElementRef;

  courses: Course = COURSES;
  courseSelected(course: Course) {
    console.log(`app component click event ${course}`, course);
    console.log(`getCourse `, this.getCourse);
    console.log(`getDiv `, this.getDiv);
  }
}
