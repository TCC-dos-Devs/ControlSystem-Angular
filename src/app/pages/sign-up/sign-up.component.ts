import { Router } from '@angular/router';
import { UsuarioService } from './../../services/usuario.service';
import { UsuarioDTO } from './../../dtos/usuario.dto';
import { Component, OnInit } from '@angular/core';

import {} from '@angular/forms';
import {} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  usuario: UsuarioDTO = {
    id: 0,
    email: '',
    usuario: '',
    senha: '',
    novasenha: '',
    confirmar: '',
  };

  constructor(private service: UsuarioService, private router: Router) {}

  ngOnInit(): void {}

  adicionar() {
    this.service.salvar(this.usuario).subscribe((resposta) => {
      this.usuario = {
        id: 0,
        email: '',
        usuario: '',
        senha: '',
        novasenha: '',
        confirmar: '',
      };
      this.router.navigateByUrl('/home');
    });
  }
}
