import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcaTexto]'
})

export class MarcaTextoDirective implements OnInit{

  // Definindo as entradas e o default
  @Input() corDeFundo = 'yellow';
  @Input() corDoTexto = 'white';

  constructor(private elemento: ElementRef) { }

  ngOnInit() { 
    this.mudarFundo(); 
  }

  private mudarFundo(cor: string = 'yellow') {
    this.elemento.nativeElement.style.backgroundColor = this.corDeFundo || cor;
    this.elemento.nativeElement.style.color = this.corDoTexto;
    this.elemento.nativeElement.style.fontweight = 'bold';
  }

}
