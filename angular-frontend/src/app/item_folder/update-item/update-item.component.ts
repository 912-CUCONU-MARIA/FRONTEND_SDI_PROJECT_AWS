import { Component,OnInit } from '@angular/core';
import { Item } from '../item';
import { ActivatedRoute,Router } from '@angular/router';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit{

  item:Item=new Item();
  id!: number;

  constructor(private itemService: ItemService,
    private route:ActivatedRoute,private router:Router
    ){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.itemService.getItemById(this.id).subscribe(data=>{
      this.item=data;
    }, error=>console.log(error));
  }

  onSubmit(){
    this.itemService.updateItem(this.id,this.item).subscribe(data=>{
        this.goToItemList();
    }
    ,error=>console.log(error));
  }

    goToItemList(){
    this.router.navigate(['/items']);
  }

}
