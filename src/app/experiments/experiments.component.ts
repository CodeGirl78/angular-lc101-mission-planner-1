import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments = [{name:"Mars soil sample", editingExp: false}, {name:"Plant growth in habitat", editingExp: false},
                {name:"Human bone density", editingExp: false}];

  constructor() { }

  ngOnInit() {
  }

  allExp(){
    let names = [];
    for(let i=0; i<this.experiments.length; i++){
      names.push(this.experiments[i]["name"])
    } return names;
  }

  /**Bonus Mission Part 5 */
  addExp(exp){
    let object = {name: "", editingExp: false};
    object.name = exp;
    if(!this.allExp().includes(exp)){
      this.experiments.push(object);
    }
  }

  /**Bonus Mission Part 7 */
  removeExp(exp){
    this.experiments.splice(this.experiments.indexOf(exp), 1)
  }

  /**Bonus Mission Part 6 */
  updateExp(newName:string, item) {
    this.experiments[this.experiments.indexOf(item)]["name"] = newName;
    item.editingExp = false;
  }

}