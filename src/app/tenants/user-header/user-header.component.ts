import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  
  isActive : string = '/tenants/userDetails';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPage(path) {
    this.isActive = path;
    console.log(this.isActive);
    this.router.navigate([path]);
  }




}
