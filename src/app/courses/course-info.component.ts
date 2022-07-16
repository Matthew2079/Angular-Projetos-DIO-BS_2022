import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit {

    // courseId!: number;
    // constructor(private activatedRoute: ActivatedRoute) {}

    course!: Course;

    // Definindo o construtor do path variable
    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {}

    // '+' converte o retorno string -> number e '!' indica que o retorno não será nulo
    ngOnInit(): void {
        // this.courseId = +this.activatedRoute.snapshot.paramMap.get('id')!;
        this.courseService.retriveById(+this.activatedRoute.snapshot.paramMap.get('id')!).subscribe({
            next: course => this.course = course,
            error: err => console.log('Error',err)
        });
    }

    save():void{
        this.courseService.save(this.course).subscribe({
            next: course => console.log('Saved with sucess', course),
            error: err => console.log('Error', err)
        });
    }

}