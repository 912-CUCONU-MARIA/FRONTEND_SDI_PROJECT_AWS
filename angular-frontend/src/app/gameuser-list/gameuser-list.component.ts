import { Component, OnInit } from '@angular/core';
import { Gameuser } from '../gameuser';
import { GameuserService } from '../gameuser.service';

@Component({
  selector: 'app-gameuser-list',
  templateUrl: './gameuser-list.component.html',
  styleUrls: ['./gameuser-list.component.css']
})
export class GameuserListComponent implements OnInit{

  gameusers?: Gameuser[]; 

  constructor(private gameuserService:GameuserService){}

  ngOnInit(): void {
    /*
    this.gameusers=[{
      "id":1,
      "firstName":"firstName1",
      "lastName":"lastName1",
      "emailAddress":"emailaddress1",
      "activeStatus":true,
      "username":"username1",
      "password":"password1"
    },
    {
      "id":2,
      "firstName":"firstName2",
      "lastName":"lastName2",
      "emailAddress":"emailaddress2",
      "activeStatus":false,
      "username":"username2",
      "password":"password2"
    }
    ];
    */
    this.getGameusers();
  }

  private getGameusers(){
    this.gameuserService.getGameusersList().subscribe(data=>
      {
        this.gameusers=data;
      }
      );
  }

}