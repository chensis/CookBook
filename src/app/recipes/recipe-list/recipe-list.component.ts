import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
   // new Recipe('BokChoi', 'Good food', 'https://steamykitchen.com/wp-content/uploads/2009/01/bok-choy-recipe-2.jpg')  
  ];
  

  constructor() { }

  ngOnInit() {
    this.recipes.push(new  Recipe('BokChoi', 'Good food', 'https://steamykitchen.com/wp-content/uploads/2009/01/bok-choy-recipe-2.jpg'));
    this.recipes.push(new  Recipe('BokChoi', 'Good food', 'https://steamykitchen.com/wp-content/uploads/2009/01/bok-choy-recipe-2.jpg'));
  }

}
