import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl;
  messageResp: any;
  show:boolean;
  constructor(private router: Router, private fb: FormBuilder, private route: ActivatedRoute) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }
  get f() { return this.loginForm.controls; }
  ngOnInit() {
   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.router.navigate([this.returnUrl]);
  }


  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      console.log("Invalide user customer");
      return;
    } else {
      console.log("valide user customer");
      let user = {
        userName: this.f.username.value,
        password: this.f.password.value
      }
   //  this.router.navigate(['tenants/userDetails']);

      this.router.navigate(['/tenants']);
    }
  }



}
