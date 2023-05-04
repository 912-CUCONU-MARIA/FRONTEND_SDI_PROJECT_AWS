import { Component,OnInit } from '@angular/core';
import { Playercharacter } from '../playercharacter';
import { PlayercharacterService } from '../playercharacter.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-create-playercharacter',
  templateUrl: './create-playercharacter.component.html',
  styleUrls: ['./create-playercharacter.component.css']
})
export class CreatePlayercharacterComponent implements OnInit{
  playercharacter:Playercharacter=new Playercharacter();
  gameUserId!: number;

  constructor(private playercharacterService: PlayercharacterService, private router:Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.gameUserId = params['gameUserId'];
    });
  }

  savePlayercharacter(){
    this.playercharacter.gameUserId = this.gameUserId;
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
