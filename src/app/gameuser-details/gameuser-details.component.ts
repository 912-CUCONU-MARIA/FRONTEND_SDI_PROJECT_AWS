import { Component,OnInit } from '@angular/core';
import { Gameuser } from '../gameuser';
import { ActivatedRoute } from '@angular/router';
import { GameuserService } from '../gameuser.service';

@Component({
  selector: 'app-gameuser-details',
  templateUrl: './gameuser-details.component.html',
  styleUrls: ['./gameuser-details.component.css']
})
export class GameuserDetailsComponent implements OnInit {

  id!:number
  gameuser:Gameuser=new Gameuser();
  constructor(private route:ActivatedRoute, private gameuserService:GameuserService){
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.gameuserService.getGameuserById(this.id).subscribe(data=>{
      this.gameuser=data;
    })
  }

}
