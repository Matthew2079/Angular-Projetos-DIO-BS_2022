import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'replace' // nome utilizado após o '|' , para chamar o pipe
})

// Implementa o PipeTransform devido necessitar de um método desta classe
export class ReplacePipe implements PipeTransform{
    
    // value é a variavel que antecede o pipe 
    transform(value: string, char: string, valueToReplace: string) {
        return value.replace(char, valueToReplace)
        
    }
}