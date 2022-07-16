import { Component, OnInit } from "@angular/core";
import { CourseService } from "./course.service";
import { Course } from "./course";

//Definindo o componente para localização dos demais elementos do projeto
@Component({
    // selector: 'app-course-list', // desabilitado devido o uso das rotas
    templateUrl: './course-list.component.html'
})

// OnInit permite fazer determinada operação quando o componente for inicializado 
export class CourseListComponent implements OnInit {

    // variavel utilizada para realizar o filtro
    filteredCourses: Course[] = [];

    // Variavel que ficará apenas neste ponto do código, neste componente 
    _filterBy!: string;
    _courses: Course[] = [];

    // Chamada do serviço
    constructor(private courseService: CourseService) {}

    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll(): void {
        // Fazendo o subscribe no método para de fato fazer a requisição
        this.courseService.retrieveAll().subscribe({
            // Next deu certo e recebeu informações do Observable do course.service
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log('Error', err) // Caso de erro 
        })
    }
    
    deleteById(courseId: number): void {
        this.courseService.deleteById(courseId).subscribe({
            next: () => {
                console.log('Deleted with sucess');
                this.retrieveAll();
            },
            error: err => console.log('Error', err)
        })
    }

    // Utilizando o data binding
    // Evento que ocorre quando está sendo digitado...
    set filter(value: string){

        this._filterBy = value;

        //Filtra pelo code
        this.filteredCourses = this._courses.filter((course: Course) => course.code.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);

         //Filtra pelo name
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
        
    }

    // Evento que ocorre quando atualiza o campo de filtro
    get filter() {
        return this._filterBy;
    }
}