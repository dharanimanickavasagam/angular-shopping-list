import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe = { name: '', description: '', imagePath: '' };

  constructor() {}

  ngOnInit(): void {}

  updateSelectedRecipe = (data: Recipe) => {
    this.selectedRecipe = data;
    console.log('selectedRecipe', this.selectedRecipe);
  };
}
