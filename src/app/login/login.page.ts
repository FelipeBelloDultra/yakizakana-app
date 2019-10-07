import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(router: Router) {
    this.router = router;
  }
  
  public email = null;
  public password = null;

  router: Router;
  
  public autenticar() {
    if (this.email != 'felipe@email.com' && this.password != 'felipe123') {
      console.log('Falha na autenticação');
      this.email = null;
      this.password = null;
    } else {
      this.router.navigate(['/home']);    
    }
  }

  ngOnInit() {
  }

}
