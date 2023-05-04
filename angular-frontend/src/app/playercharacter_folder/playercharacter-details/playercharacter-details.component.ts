import { Component,OnInit } from '@angular/core';
import { Playercharacterusername } from '../playercharacterusername';
import { ActivatedRoute } from '@angular/router';
import { PlayercharacterService } from '../playercharacter.service';


@Component({
  selector: 'app-playercharacter-details',
  templateUrl: './playercharacter-details.component.html',
  styleUrls: ['./playercharacter-details.component.css']
})
export class PlayercharacterDetailsComponent implements OnInit{

  id!:number
  playercharacter:Playercharacterusername=new Playercharacterusername();
  constructor(private route:ActivatedRoute, private playercharacterService:PlayercharacterService){
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.playercharacterService.getPlayercharacterById(this.id).subscribe(data=>{
      this.playercharacter=data;
    })
  }

}
