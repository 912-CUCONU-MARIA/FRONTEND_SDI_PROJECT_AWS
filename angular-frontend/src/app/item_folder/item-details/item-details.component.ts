import { Component,OnInit } from '@angular/core';
import { Item } from '../item';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit{
    
  id!:number
  item:Item=new Item();
  constructor(private route:ActivatedRoute, private itemService:ItemService){
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.itemService.getItemById(this.id).subscribe(data=>{
      this.item=data;
    })
  }

}
