import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component ({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

// consumo via http é de forma assíncrona para isso utilizou o onChanges

export class StarComponent implements OnChanges{

    // Permite que a variavel criada receba o valor de outro componente
    @Input()
    rating: number = 0;

    starWidth!: number;

    ngOnChanges(): void {
        // this.starWidth = this.rating * 94 / 5;
        this.starWidth = this.rating * 74 / 5;
    }

}