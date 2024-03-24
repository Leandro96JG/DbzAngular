import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { DbzService } from '../services/dbz.service';





@Component({
  selector: 'app-dbz-main-name',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

 constructor(private dbzService:DbzService){}

    get characters(): Character[]{
      return [...this.dbzService.characters];
    }

   onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
    // console.log(id);
   }

   onNewCharacter(character:Character):void{
    this.dbzService.addCharacter(character);
   }
}
