import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  // apiUrl = 'https://sheet.best/api/sheets/be8a9b49-accd-41f1-b774-87e28f54a3cf';
  apiUrl = 'https://sheet.best/api/sheets/be8a9b498-accd-41f1-b774-87e28f54a3cf';
  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  // C.R.U.D - Create, Read, Update, Delete
  // Retorna a lista de usuarios

  // Retorna a lista de usuarios READ
  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  // Salva usuário no BD CREATE
  postUser(user: User):Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user)
  }

  // Exclui o usuário do banco DELETE
  deleteUser(id: number):Observable<User> {
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
  }

  // Edita o usuário UPDATE
  updateUser(id: string, user:User):Observable<User> {
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user, this.httpOptions);
  }

  // Lista usuário único
  getUser(id: string):Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`)
  }
}
