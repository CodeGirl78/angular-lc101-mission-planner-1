import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})

export class EquipmentComponent implements OnInit {
  equipmentItems: string[] = ['Command Module', 'Space Camera', 'Food', 'Oxygen Tanks'];

  constructor() { }

  ngOnInit() {
  }

  /**Bonus Mission Part 2 */
  add(equipmentItems: "string": boolean) {
    this.equipmentItems.push({equipmentItems: this.equipmentItems});
  }

  /**Bonus Mission Part 4 */
  remove(equipmentItems: "string") {
    let index = this.equipmentItems.indexOf(equipmentItems);
    this.equipmentItems.splice(index, 1);
  }

  /**Bonus Mission Part 3 */
  edit(equipmentItems: "string") {
    this.equipmentItemsBeingEdited = this.equipmentItems;
  }
  
  /**Bonus Mission */
  save(equipmentItems: "string") {
    equipmentItems['equipmentItems'] = equipmentItems;
    this.equipmentItemsBeingEdited = null;
  }

}