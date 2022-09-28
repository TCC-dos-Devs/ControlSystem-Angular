import { Router } from '@angular/router';
import { UsuarioDTO } from './../../dtos/usuario.dto';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],

  styles: [
    `
      :host ::ng-deep .p-password input {
        width: 400px;
        height: 50px;
        padding: 5px;

        outline: 0;
        border-radius: 10px;
        border-style: none;
        margin-bottom: 15px;
        align-items: center;
        background-color: #161616;
      }
    `,
  ],
})
export class ProfileComponent implements OnInit {
  usuario: UsuarioDTO = {
    id: 0,
    email: '',
    usuario: '',
    senha: '',
    novasenha: '',
    confirmar: '',
  };

  constructor(private router: Router, private service: UsuarioService) {}

  ngOnInit(): void {
    this.buscar();
  }

  buscar() {
    this.service.buscarPorId(1).subscribe((resposta) => {
      this.usuario = {
        id: resposta.id,
        email: resposta.email,
        usuario: resposta.usuario,
        senha: resposta.senha,
        novasenha: resposta.senha,
        confirmar: resposta.senha,
      };
    });
  }

  value1!: string;
  value2!: string;
  value3!: string;
  value4!: string;
  value5!: string;
  value6!: string;
  value7!: string;
}
