import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomServiceService } from 'src/app/service/custom-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  userForm! : FormGroup
  loading = false
  submit = false
  returnUrl! : string
  constructor(private fb:FormBuilder , private service : CustomServiceService , private router : Router , private Activeroute : ActivatedRoute , private toaster : ToastrService) {
    if(this.service.isLoggedIn()){
      this.router.navigate(['/full/dashboard'])
    }
   }

  ngOnInit() {
    this.userForm = this.fb.group({
      username : ['' , Validators.required],
      password : ['' , Validators.required]
    })
   

    this.returnUrl = this.Activeroute.snapshot.queryParams['returnUrl'] || '/full/dashboard'
  }

  //
get f(){
  return this.userForm.controls;
}

  submitData(){
    this.submit = true
    if(!this.userForm.valid){
      return
    }
    this.loading = true
    this.service.login(this.userForm.value.username , this.userForm.value.password).subscribe((res:any)=>{
      if(res.isSuccess){
        localStorage.setItem("userInfo" , JSON.stringify({
          username : res.username,
          password : res.password
        }))
        this.toaster.success(res.message)
        this.router.navigate([this.returnUrl])
      }
      else{
        this.loading = false
        this.submit = false
        this.toaster.error(res.message)
      }
    },
    (error:any)=>{
      this.loading = false
    }
    );
  }
}
