import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../models/character';
import { ComicsCharacter } from '../models/comics-character';
import { ComicsCharacterSimilarities } from '../models/comics-character-similarities';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient: HttpClient) { }


  getComicsCharacters() : Observable<ComicsCharacter[]> {
    return this.httpClient.get<ComicsCharacter[]>(environment.url + "/characters/comics");
  }

  guessComicCharacter(character : Character) : Observable<ComicsCharacterSimilarities> {
    return this.httpClient.get<ComicsCharacterSimilarities>(environment.url + "/characters/comics/guess/" + character.id)
  }

  createComicCharacter(characterForm : FormData) : Observable<any> {
    return this.httpClient.post<any>(environment.url + '/characters/comics', characterForm);
  }

  getAudiovisualCharacters() : Observable<ComicsCharacter[]> {
    return this.httpClient.get<ComicsCharacter[]>(environment.url + "/characters/audiovisual");
  }

  guessAudiovisualCharacter(character : Character) : Observable<ComicsCharacterSimilarities> {
    return this.httpClient.get<ComicsCharacterSimilarities>(environment.url + "/characters/audiovisual/guess/" + character.id)
  }

  createAudioVisualCharacter(characterForm : FormData) : Observable<any> {
    return this.httpClient.post<any>(environment.url + '/characters/audiovisual', characterForm);
  }

}
