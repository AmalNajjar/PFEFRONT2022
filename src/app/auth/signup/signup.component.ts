import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initFormBuilder()
  }

  private initFormBuilder(): void{
    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(4)]],
    })
  }

  public errorMessage(formControlName: string, email?: boolean): string | void {
    if (this.signupForm.controls[formControlName]?.errors?.['required']){
      return 'Champ obligatoire'
    }else if (email && this.signupForm.controls[formControlName]?.errors?.['email']) {
      return 'Adresse e-mail invalide'
    }
  }

  public signup(): void {
      console.error("Signup");
  }
}
