import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { Moment } from 'moment';
import { CharacterService } from '../../services/character.service';
import { EnumService } from '../../services/enum.service';

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
  },
};


@Component({
  selector: 'app-comics-character-create',
  templateUrl: './comics-character-create.component.html',
  styleUrls: ['./comics-character-create.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { 
     provide: MAT_DATE_FORMATS, useValue: MY_FORMATS
    },
   ]
})
export class ComicsCharacterCreateComponent implements OnInit {
  formGroup : FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    apparitionYear: new FormControl('', [Validators.required]),
    gender: new FormControl('none', [Validators.required]),
    type: new FormControl('none', [Validators.required]),
    species: new FormControl([], [Validators.required]),
    date: new FormControl('', [Validators.required])
  })

  fileName = '';
  formData : FormData = new FormData();
  gendersList : string[] = []
  speciesList : string[] = []
  characterTypesList : string[] = []

  constructor(private characterService : CharacterService, private enumService : EnumService) { }

  ngOnInit():  void {
    this.enumService.getGenders().subscribe(
      data => {
        this.gendersList = data
        this.formGroup.patchValue({
          gender: data[0]
        })
      }
    )
    this.enumService.getSpecies().subscribe(
      data => {
        this.speciesList = data
      }
    )
    this.enumService.getCharacterTypes().subscribe(
      data => {
        this.characterTypesList = data
        this.formGroup.patchValue({
          type: data[0]
        })
      }
    )

  }
  
  chosenYearHandler(normalizedYear: Moment, dp: any) {
    const ctrlValue = this.formGroup.get('date')!.value;
    console.log(this.formGroup.get('date')!.value, ctrlValue);
    ctrlValue.year(normalizedYear.year());
    this.formGroup.setValue(ctrlValue);
    dp.close();
    console.log(this.formGroup.get('date')!.value, ctrlValue);
  }

  onFileSelected(event: any) {

    const file:File = event.target.files[0];

    if (file) {
        this.fileName = file.name;
        this.formData.set("file", file);
      }
  }

  onSubmit() {
    this.formData.set('Id', this.formGroup.get('id')?.value)
    this.formData.set('Gender', this.formGroup.get('gender')?.value)
    this.formData.set('Type', this.formGroup.get('type')?.value)
    this.formData.set('Name', this.formGroup.get('name')?.value)
    

    var speciesArray = this.formGroup.get('species')?.value;
    for (let index = 0; index < speciesArray.length; index++) {
      this.formData.set('Species[' + index + ']', speciesArray[index])
    } 
    this.formData.set('ApparitionYear', this.formGroup.get('apparitionYear')?.value)
    this.characterService.createComicCharacter(this.formData).subscribe(
      data => console.log(data)
    )
  }
}

