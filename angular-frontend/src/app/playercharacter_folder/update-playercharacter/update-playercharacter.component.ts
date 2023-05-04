import { Component,OnInit } from '@angular/core';
import { Playercharacter } from '../playercharacter';
import { ActivatedRoute,Router } from '@angular/router';
import { PlayercharacterService } from '../playercharacter.service';

@Component({
  selector: 'app-update-playercharacter',
  templateUrl: './update-playercharacter.component.html',
  styleUrls: ['./update-playercharacter.component.css']
})
export class UpdatePlayercharacterComponent implements OnInit{

  playercharacter:Playercharacter=new Playercharacter();
  id!: number;

  constructor(private playercharacterService: PlayercharacterService,
    private route:ActivatedRoute,private router:Router
    ){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.playercharacterService.getPlayercharacterById(this.id).subscribe(data=>{
      this.playercharacter=data;
    }, error=>console.log(error));
  }

  onSubmit(){
    this.playercharacterService.updatePlayercharacter(this.id,this.playercharacter).subscribe(data=>{
        this.goToPlayercharacterList();
    }
    ,error=>console.log(error));
  }

    goToPlayercharacterList(){
    this.router.navigate(['/playercharacters']);
  }

}
