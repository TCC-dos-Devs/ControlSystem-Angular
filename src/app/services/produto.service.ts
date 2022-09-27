import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProdutoDTO } from '../dtos/produtos.dto';
import { ProdutoModel } from '../models/produtos.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  url: string = environment.URL + 'Produtos';

  constructor(private http: HttpClient) {}

  buscar(): Observable<ProdutoModel[]> {
    return this.http
      .get(this.url)
      .pipe(map((resposta) => <ProdutoModel[]>resposta));
  }

  buscarPorId(id: number): Observable<ProdutoModel> {
    return this.http
      .get(this.url + '/' + id)
      .pipe(map((resposta) => <ProdutoModel>resposta));
  }

  salvar(Produto: ProdutoDTO): Observable<ProdutoModel> {
    return this.http
      .post(this.url, Produto)
      .pipe(map((resposta) => <ProdutoModel>resposta));
  }

  atualizar(Produto: ProdutoDTO) {
    return this.http
      .put(this.url + '/' + Produto.id, Produto)
      .pipe(map((resposta) => <ProdutoModel>resposta));
  }
}
