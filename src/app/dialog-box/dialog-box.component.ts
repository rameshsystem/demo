//dialog-box.component.ts
import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VoiceRecognitionService } from './../voice-recognition.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
//import productData from './product.json';  

export interface Product  {  
   value: string;
   name: string;
} 

export interface PeriodicElement {
  name: string;
  id: number;
  weight: number;
  symbol: string;  
}


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css'],
  providers: [VoiceRecognitionService]
})
export class DialogBoxComponent {

  action:string;
  local_data:any;
  //products: Product[] = productData; 
  myControl = new FormControl();
  //options: string[] = ['One', 'Two', 'Three'];
  options: Product[] =[  
    {  
      "value": "1",  
      "name": "RESPIRATORY 10 MONTEK 5 MG TABLET 10 MONTELUKAST 5 MG TABLET MONTEK"  
      
    },  
    {  
      "value": "2",  
      "name": "OPHTHAL / OTOLOGICALS 5 ML BRIMOLOL 5/1.5 MG EYE DROPS 5 MLTIMOLOL + BRIMONIDINE 5/1.5 MG EYE DROPS BRIMOLOL"
    },  
    {  
      "value": "3",  
      "name": "CARDIAC 10 STORVAS 80 MG TABLET 10 ATORVASTATIN 80 MG TABLET STORVAS"  
    },  
    {  
      "value": "4",  
      "name": "PAIN / ANALGESICS 10 THIOACT 4 MG TABLET 10 THIOCOLCHICOSIDE 4 MG TABLET THIOACT"    
    },  
    {  
      "value": "5",  
      "name": "DERMA 30 GM SEBIFIN 1 % CREAM 30 GM TERBINAFINE 1 % CREAM SEBIFIN"
    }  
  ] ;

  filteredOptions: Observable<Product[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice())),
    );
  }
  

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    public service : VoiceRecognitionService,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: PeriodicElement)
     {
    this.service.init()
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }
  displayFn(product: Product): string {
    return product && product.name ? product.name : '';
  }
 
  private _filter(value: string): Product[] {
    const filterValue = value.toLowerCase();

    return this.options['name'].filter(option => option.name.toLowerCase().includes(filterValue));
  }
  
  startService(){
    this.service.start()
  }

  stopService(){
    this.service.stop()
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }



}

