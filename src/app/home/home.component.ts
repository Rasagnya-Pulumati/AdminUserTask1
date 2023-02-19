import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  router:Router;
  constructor(router:Router)
  {
    this.router = router;
  }

  onClick(input:string)
  {
    if(input=='admin')
    {
       this.router.navigate(['admin']);
    }
    else if(input=='user')
    {
      this.router.navigate(['user']);
    }

  }


}


