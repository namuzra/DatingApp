import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  mers: false;
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }
register() {
  this.authService.register(this.model).subscribe(
    () => {this.alertify.success('registration Successful');
  },
    error => {
      this.alertify.error(error);
    }
  );
}

cancel() {
  this.cancelRegister.emit(this.mers);
}
}
