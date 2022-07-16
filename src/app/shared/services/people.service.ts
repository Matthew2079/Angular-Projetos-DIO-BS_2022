import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Injeta o serviço na raíz, estando disponível em qualquer parte da aplicação
@Injectable({
  providedIn: 'root'
})

export class PeopleService {

  constructor() { }

  getPeople():Observable<any> {

    let peopleArray = [
      { firstName: 'Mateus', lastName: 'Frahm', age: 27 },
      { firstName: 'Maria', lastName: 'Silva', age: 28  },
      { firstName: 'Joao', lastName: 'Pereira', age: 32 },
      { firstName: 'Marcio', lastName: 'Santos', age: 40 }
    ]

    return of(peopleArray); // valor único emitido

  }

}
