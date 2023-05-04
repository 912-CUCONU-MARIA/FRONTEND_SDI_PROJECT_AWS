import { Component,OnInit } from '@angular/core';
import { Playercharacter } from '../playercharacter';
import { PlayercharacterService } from '../playercharacter.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-playercharacter',
  templateUrl: './create-playercharacter.component.html',
  styleUrls: ['./create-playercharacter.component.css']
})
export class CreatePlayercharacterComponent implements OnInit{
  playercharacter:Playercharacter=new Playercharacter();

  constructor(private playercharacterService: PlayercharacterService, private router:Router){}

  ngOnInit(): void {
    
  }

  savePlayercharacter(){
    this.playercharacterService.createPlayercharacter(this.playercharacter).subscribe(data=>
      {
       console.log(data);
       this.goToPlayercharacterList();
      },
      error=>console.log(error));
  }

  goToPlayercharacterList(){
    this.router.navigate(['/playercharacters']);
  }

  onSubmit(): void{
    console.log(this.playercharacter);
    this.savePlayercharacter();
  }
}
