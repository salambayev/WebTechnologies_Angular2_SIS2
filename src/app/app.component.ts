import { Component } from '@angular/core';
import {Hero } from './hero';


const HEROES: Hero[] = [
  { id: 11, name: 'Batman', superpower: "Money"},
  { id: 12, name: 'Superman' , superpower: "Strength"},
  { id: 13, name: 'Flash', superpower:"Speed" },
  { id: 14, name: 'Aquaman' , superpower: "Water"},
  { id: 15, name: 'Wonder Woman' , superpower:"Daughter of Gods"},
  { id: 16, name: 'Green Lantern' , superpower:" Green Ring"},
  { id: 17, name: 'Supergirl' , superpower: "Strength"},
  { id: 18, name: 'Zoom' , superpower:"Speed"},
  { id: 19, name: 'Reverse Flash' , superpower:"Speed"},
  { id: 20, name: 'Cyborg', superpower:"Mechanic body" }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hero details';
  heroes = HEROES;
  selectedHero: Hero;
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}



