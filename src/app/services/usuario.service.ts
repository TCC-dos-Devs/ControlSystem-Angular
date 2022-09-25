import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuarioDTO } from './../dtos/usuario.dto';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  url: string = environment.URL + 'usuarios';

  constructor(private http: HttpClient) {}

  buscar(): Observable<UsuarioModel[]> {
    return this.http
      .get(this.url)
      .pipe(map((resposta) => <UsuarioModel[]>resposta));
  }

  buscarPorId(id: number): Observable<UsuarioModel> {
    return this.http
      .get(this.url + '/' + id)
      .pipe(map((resposta) => <UsuarioModel>resposta));
  }

  salvar(usuario: UsuarioDTO): Observable<UsuarioModel> {
    return this.http
      .post(this.url, usuario)
      .pipe(map((resposta) => <UsuarioModel>resposta));
  }

  atualizar(usuario: UsuarioDTO) {
    return this.http
      .put(this.url + '/' + usuario.id, usuario)
      .pipe(map((resposta) => <UsuarioModel>resposta));
  }
}
