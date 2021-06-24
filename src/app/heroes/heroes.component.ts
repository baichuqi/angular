import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes: Hero[] = [];
  constructor(private heroService:HeroService) { }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  add(name: string): void {
    name = name.trim();
    if(!name){return;}
    this.heroService.addHero({name} as Hero)
    .subscribe(hero => {
      console.log(hero);
      this.heroes.push(hero);
    });
  }
  delete(hero: Hero): void{
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  // selectedHero?:Hero;
  // onSelect(hero:Hero): void {
  //   console.log(hero.name);
  //   this.selectedHero = hero;
  //   this.messageService.add(`heroes component : selected hero id = ${hero.id}`);
  // }
}
