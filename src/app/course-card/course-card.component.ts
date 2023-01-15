import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent {
  @Input()
  course: Course;

  @Input()
  cardIndex;

  @Output()
  courseSelected = new EventEmitter<Course>();

  onCourseViewed(course: Course) {
    this.courseSelected.emit(course);
  }

  isImageNotAvailable() {
    return this.course && this.course.iconUrl;
  }
}
