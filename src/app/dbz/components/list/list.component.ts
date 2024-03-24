import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    @Input()
    public characterList: Character[] =[{
      name:'Sin Nombre',
      power:9999,
      id:'',
    }];

    @Output()
    public onDelete:EventEmitter<string> = new EventEmitter<string>();


    onDeletedId(id?:string):void{
         if(!id)return;
         this.onDelete.emit(id);

    }


}
