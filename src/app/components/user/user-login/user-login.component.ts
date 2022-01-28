import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  formGroup!:FormGroup;

  constructor(private formbuilder:FormBuilder, private location:Location) { }

  ngOnInit(): void {
    this.formGroup = this.formbuilder.group({
      email:["",[Validators.required, Validators.email]],
      password:["",[Validators.required, Validators.minLength(3), Validators.maxLength(4)]]
    });
  }
  
  onSubmit(){
    if(this.formGroup.invalid){return;}
    console.log(this.formGroup.value);
    
  }

  onCancel(){
      this.location.back();
  }

}
