import { CharactersSimilarities } from "./character-similarities";
import { ComicsCharacter } from "./comics-character";

export interface AudioVisualCharacterSimilarities extends CharactersSimilarities {
    appearanceTypes: string[]
}