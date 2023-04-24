import { Component,OnInit } from '@angular/core';
import { GameuserService } from '../gameuser.service';
import { Gameuser } from '../gameuser';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-update-gameuser',
  templateUrl: './update-gameuser.component.html',
  styleUrls: ['./update-gameuser.component.css']
})
export class UpdateGameuserComponent implements OnInit {

  gameuser:Gameuser=new Gameuser();
  id!: number;

  constructor(private gameuserService: GameuserService,
    private route:ActivatedRoute,private router:Router
    ){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.gameuserService.getGameuserById(this.id).subscribe(data=>{
      this.gameuser=data;
    }, error=>console.log(error));
  }

  onSubmit(){
    this.gameuserService.updateGameuser(this.id,this.gameuser).subscribe(data=>{
        this.goToGameuserList();
    }
    ,error=>console.log(error));
  }

  goToGameuserList(){
    this.router.navigate(['/gameusers']);
  }

}
