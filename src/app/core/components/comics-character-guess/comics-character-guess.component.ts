import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character';
import { ComicsCharacter } from '../../models/comics-character';
import { ComicsCharacterSimilarities } from '../../models/comics-character-similarities';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-comics-character-guess',
  templateUrl: './comics-character-guess.component.html',
  styleUrls: ['./comics-character-guess.component.css']
})
export class ComicsCharacterGuessComponent implements OnInit {

  guessedName : string = ""
  guessedCharacter : ComicsCharacter | undefined

  characters : ComicsCharacter[] = []
  filteredCharacters : ComicsCharacter[] = []
  triedCharacters : ComicsCharacter[] = []

  charactersSimilarities : Map<ComicsCharacter, ComicsCharacterSimilarities> = new Map<ComicsCharacter, ComicsCharacterSimilarities>()

  constructor(private characterService : CharacterService) { }

  ngOnInit(): void {
    this.characterService.getComicsCharacters().subscribe(
      data => {
        this.characters = data
        this.filteredCharacters = this.characters
        console.log(data)
      }
    );
  }

  public preguess(character : ComicsCharacter) {
    console.log(character)
    this.guessedName = character.name
    this.guessedCharacter = character
    this.filter(character.name)
  }

  public guess() {
    if (this.guessedCharacter != undefined) {
      this.characterService.guess(this.guessedCharacter).subscribe(
        data => {
          if (this.guessedCharacter) {
            this.charactersSimilarities.set(this.guessedCharacter, data)
            this.triedCharacters.unshift(this.guessedCharacter) 
            this.guessedName = ""
            this.guessedCharacter = undefined
            this.filter("")
            if (data['id'] == 'Exact') {
              this.win()
            }
          }
        } 
      )
    }
  }

  public filter(name: any) {
    this.filteredCharacters = this.characters.filter(cc => cc.name.toLowerCase().includes(name.toLowerCase()) && !this.triedCharacters.includes(cc))
  }

  public win() {
    console.log("win !")
  }

}
