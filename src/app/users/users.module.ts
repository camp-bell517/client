import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { httpInterceptors } from '../shared/interceptors';
@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, UsersRoutingModule],
  providers: [AuthService, httpInterceptors],
})
export class UsersModule {}
