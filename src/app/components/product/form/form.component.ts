import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form!:FormGroup;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {

    this.form = this.formbuilder.group({
      title:["",[Validators.required]],
      description:["",[Validators.required]],
      published:[true]
    });
  }

}
