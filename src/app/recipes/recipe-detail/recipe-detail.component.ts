import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe = { name: '', description: '', imagePath: '' };
  constructor() {}

  ngOnInit(): void {}

  showRecipeDetails = (recipe: Recipe): boolean => {
    if (
      recipe.name == '' &&
      recipe.description == '' &&
      recipe.imagePath == ''
    ) {
      return false;
    }
    return true;
  };
}
