import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnumService {

  constructor(private httpClient: HttpClient) { }

  getGenders() : Observable<string[]> {
    return this.httpClient.get<string[]>(environment.url + "/enums/genders");
  }

  getSpecies() : Observable<string[]> {
    return this.httpClient.get<string[]>(environment.url + "/enums/species");
  }

  getCharacterTypes() : Observable<string[]> {
    return this.httpClient.get<string[]>(environment.url + "/enums/charactertypes");
  }
  
  getAppearanceTypes() : Observable<string[]> {
    return this.httpClient.get<string[]>(environment.url + "/enums/appearancetypes");
  }

}
