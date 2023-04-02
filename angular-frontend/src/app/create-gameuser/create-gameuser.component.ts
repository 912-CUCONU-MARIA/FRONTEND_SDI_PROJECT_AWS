import { Component,OnInit } from '@angular/core';
import { Gameuser } from '../gameuser';
import { GameuserService } from '../gameuser.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-gameuser',
  templateUrl: './create-gameuser.component.html',
  styleUrls: ['./create-gameuser.component.css']
})
export class CreateGameuserComponent implements OnInit{
  gameuser:Gameuser=new Gameuser();

  constructor(private gameuserService: GameuserService, private router:Router){}

  ngOnInit(): void {
    
  }

  saveGameuser(){
    this.gameuserService.createGameuser(this.gameuser).subscribe(data=>
      {
       console.log(data);
       this.goToGameuserList();
      },
      error=>console.log(error));
  }

  goToGameuserList(){
    this.router.navigate(['/gameusers']);
  }

  onSubmit(): void{
    console.log(this.gameuser);
    this.saveGameuser();
  }

}
