import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(   private formBuilder: FormBuilder,
                 private router: Router) { }

  adminForm:FormGroup;
  submitted = false;
  
 
  ngOnInit(): void {
    this.adminForm = this.formBuilder.group({
      eventType: ['Holiday', Validators.required],
      subject:  ['', Validators.required],
      message: ['', Validators.required],
    })
    
  }
  Event: any=['Holiday','Event','Urgent Help','Nagarro news','New Policy'];

  get f() { return this.adminForm.controls; }

  onSubmit(){
    this.submitted = true;
    if(this.adminForm.get('message').value===""){
      return;
    }
    console.log(this.adminForm.value)
  }

}
