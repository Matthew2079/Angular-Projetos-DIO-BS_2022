import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Importando o módulo que vamos utilizar na aplicação
import { CommonModule } from '@angular/common'
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/component/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CourseModule,
    CoreModule,
    HttpClientModule,
    // Definindo as rotas que serão carregadas no 'root'
    RouterModule.forRoot([
      { path: '', redirectTo: 'courses',pathMatch: 'full' }, // rota vazia abre o caminho especificado
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }



