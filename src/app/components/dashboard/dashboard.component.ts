import { JwtService } from 'src/app/core/services/jwt.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private jwt: JwtService) { }

  ngOnInit(): void {
    this.jwt.home().subscribe(res => {
      // console.log(res);
      
    })
  }

  logout(){
    this.jwt.logout()
  }
}
