import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  addUserForm: FormGroup;
  submitted = false;
  // noWhitespaceValidator: any;
  show: boolean;
  constructor(private router: Router, private fb: FormBuilder) { }

  get f() { return this.addUserForm.controls; }

  currentUser=JSON.parse(localStorage.getItem("currentUser"));
  
  ngOnInit() {

    this.addUserForm = this.fb.group({
      firstName: ['', [Validators.required,this.noWhitespaceValidator]],
      lastName: ['', [Validators.required,this.noWhitespaceValidator]],
      localAddress: ['', [Validators.required,this.noWhitespaceValidator]],
      oldAddress: ['', [Validators.required,this.noWhitespaceValidator]],
      married: ['', [Validators.required,this.noWhitespaceValidator]],

      memberCount: ['', [Validators.required,this.noWhitespaceValidator]],
      voterId: ['', [Validators.required,this.noWhitespaceValidator]],
      gadiNumber: ['', [Validators.required,this.noWhitespaceValidator]],
      fatherName: ['', [Validators.required,this.noWhitespaceValidator]],
      cast : ['', [Validators.required,this.noWhitespaceValidator]]
    
    });
    console.log(this.currentUser.result);
  }



  
  addUser(){
    this.submitted = true;
    if (this.addUserForm.invalid) {
        this.show=true;
      console.log("Invalide user customer");
      return;
    }else{
      console.log("valid user customer");
    }
  }

public noWhitespaceValidator(control: FormControl) {
  const isWhitespace = (control.value || '').trim().length === 0;
  const isValid = !isWhitespace;
  return isValid ? null : { 'whitespace': true };
}

}
