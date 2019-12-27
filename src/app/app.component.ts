import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onlyParNumbers: number[] = [1,2,3,4,5,6,7,8,9,10];

  
  constructor(private router: Router){

  }

  navegar(){
     this.router.navigate(['medicos'])
  }

  
}
