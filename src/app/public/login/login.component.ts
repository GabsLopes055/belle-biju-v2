import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../shared/toast/toast.service';
import { InputIconComponent } from "../../shared/input-icon/input-icon.component";
import { ButtonComponent } from "../../shared/button/button.component";
import { LoginService } from './login.service';
import { login } from '../../models/login.model';

@Component({
  selector: 'app-login',
  imports: [InputIconComponent, ButtonComponent, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  formLogin = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private readonly toast: ToastService,
    private readonly authService: LoginService
  ) {}

  entrar() {
    if (this.formLogin.valid) {
      this.authService
        .logar(this.formLogin.value as login)
        .subscribe({
          next: (response) => {
            console.log(response)
            // window.sessionStorage.setItem('token', response.token);
            // const token = response.token.split('.')[1];
            // const payload = JSON.parse(atob(token));
            // console.log(payload)
            // const usuario: User = response.user;
            // this.userService.usuarioInstance = usuario;
            // this.userService.usuario.next(usuario);
            // this.router.navigate(['/admin/escola']);
            // this.menuService.updateMenu();
          },
          error: (erro) => {
            this.toast.notify({
              message: 'Usuário ou senha incorreto',
              type: 'ERROR',
            });
          },
        });
    } else {
      // this.toast.notify({
      //   message: 'Preencha o formulário corretamente !',
      //   type: 'WARNING',
      // });
    }
  }

}
