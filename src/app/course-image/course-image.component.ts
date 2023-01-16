import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Input,
} from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-image",
  templateUrl: "./course-image.component.html",
  styleUrls: ["./course-image.component.css"],
})
export class CourseImageComponent implements AfterViewInit, AfterContentInit {
  ngAfterContentInit(): void {
    // throw new Error("Method not implemented.");
  }
  ngAfterViewInit(): void {
    console.log("src ", this.src);
  }
  @Input()
  src: Course;
}
