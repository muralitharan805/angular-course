import {
  AfterViewInit,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from "@angular/core";
import { CourseImageComponent } from "../course-image/course-image.component";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // throw new Error("Method not implemented.");
    console.log("getCourseImage ", this.getCourseImage);
  }
  @Input()
  course: Course;

  @Input()
  cardIndex;

  @Input()
  noImagetemp: TemplateRef<any>;

  @ContentChild(CourseImageComponent)
  getCourseImage;

  @Output()
  courseSelected = new EventEmitter<Course>();

  onCourseViewed(course: Course) {
    this.courseSelected.emit(course);
  }

  isImageNotAvailable() {
    return this.course && this.course.iconUrl;
  }
}
