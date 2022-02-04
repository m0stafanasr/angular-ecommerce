import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, FormArray } from '@angular/forms';
import { existEmail } from 'src/app/validator/existEmail.Validator';
import { existUser } from 'src/app/validator/existUser.validator';
import { passwordvalidation } from 'src/app/validator/password.validator';
import { passwordvalidationuser } from 'src/app/validator/usermatch.validator';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  registerform!: FormGroup;
  ExistmailValidator:string[]=[]
  ExistUsers:string[]=[]
  passwordMatch:string=''

  constructor(private fg: FormBuilder) { 
    this.ExistUsers=["mostafa", "salma", "dd@dd.com"];
    this.registerform= fg.group({
    userName:['', [Validators.required, Validators.pattern('[A-Za-z]{5,}'),existUser(this.ExistUsers) ]],
    pass:['', [Validators.required, Validators.pattern('[A-Za-z0-9]{6,}')]],
    cnfrmpass: ['',[Validators.required]],
    email:['',[Validators.required, existEmail(this.ExistmailValidator)]],
    phones:fg.array([this.fg.control('')]),
    address:fg.group({
      city:[''],
      street:[''],
      pstCode:[''],

    }),
    delivery: [''],
    specificDelivery:['']
  },{validators: [passwordvalidation]})}


 

  ngOnInit(): void {
  
  }


  get userName(){
    return this.registerform.get('userName');
  }

  get pass(){
    return this.registerform.get('pass')
  }
  get cnfrmPass(){
    return this.registerform.get('cnfrmPass')
  }

  get email(){
    return this.registerform.get('email')
  }
  get phones(){
    return this.registerform.get('phones') as FormArray
  }
  get delivery(){
    return this.registerform.get('delivery') 
  }
  addPhone(event:any){
    this.phones.push(this.fg.control(''))
    event.target?.classList.add('d-none')
  }
  get city(){
    return this.registerform.get('city')
  }
get pstCode(){
  return this.registerform.get('pstCode')
}
get street(){
  return this.registerform.get('street')
}
  updateDelivery(){

  }

removephone(){
  
}


 register(){

 }

 
}
