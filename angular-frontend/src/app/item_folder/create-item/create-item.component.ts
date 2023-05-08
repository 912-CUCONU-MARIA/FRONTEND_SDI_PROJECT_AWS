import { Component,OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit{
  // item:Item=new Item();

  // constructor(private itemService: ItemService, private router:Router){}

  // ngOnInit(): void {
    
  // }

  // saveItem(){
  //   this.itemService.createItem(this.item).subscribe(data=>
  //     {
  //      console.log(data);
  //      this.goToItemList();
  //     },
  //     error=>console.log(error));
  // }

  // goToItemList(){
  //   this.router.navigate(['/items']);
  // }

  // onSubmit(): void{
  //   console.log(this.item);
  //   this.saveItem();
  // }
  itemForm: FormGroup;

  constructor(private itemService: ItemService, private router: Router, private formBuilder: FormBuilder) {
    this.itemForm = this.formBuilder.group({
      itemName: ['', Validators.required],
      itemRarity: ['', Validators.required],
      itemType: ['', Validators.required],
      itemEffect: ['', Validators.required],
      itemLevel: ['', [Validators.required, Validators.min(0)]],
      description: [''],
    });
  }

  ngOnInit(): void {}

  saveItem(): void {
    if (this.itemForm.invalid) {
      return;
    }

    const item: Item = this.itemForm.value;
    this.itemService.createItem(item).subscribe(
      (data) => {
        console.log(data);
        this.goToItemList();
      },
      (error) => console.log(error)
    );
  }

  goToItemList(): void {
    this.router.navigate(['/items']);
  }

  onSubmit(): void {
    this.saveItem();
  }
}
