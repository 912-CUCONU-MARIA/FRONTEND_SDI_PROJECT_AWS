import { Component, OnInit } from '@angular/core';
import { Gameuser } from '../gameuser';
import { GameuserService } from '../gameuser.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-gameuser-list',
  templateUrl: './gameuser-list.component.html',
  styleUrls: ['./gameuser-list.component.css']
})
export class GameuserListComponent implements OnInit{

  gameusers!: Gameuser[]; 

  constructor(private gameuserService:GameuserService
    ,private router: Router){}

  ngOnInit(): void {
   this.getGameusers();
  }

  private getGameusers(){
    this.gameuserService.getGameusersList().subscribe(data=>
      {
        this.gameusers=data;
      }
      );
  }

  updateGameuser(id: number){
    this.router.navigate(['update-gameuser',id]);
  }

  deleteGameuser(id:number){
    this.gameuserService.deleteGameuser(id).subscribe(data=>{
      console.log(data);
      this.getGameusers();
    })
  }

  gameuserDetails(id:number){
    this.router.navigate(['gameuser-details',id]);
  }

  sort(isAsc:boolean){
    if(isAsc){
      this.gameusers.sort((a,b)=>(a.firstName>b.firstName) ? 1: ((b.firstName>a.firstName) ? -1 : 0));
    } else{
      this.gameusers.sort((a,b)=>(a.firstName>b.firstName) ? -1: ((b.firstName>a.firstName) ? 1 : 0));
    }

  }

}