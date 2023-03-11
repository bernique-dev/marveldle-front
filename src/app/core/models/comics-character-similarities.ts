import { CharactersSimilarities } from "./character-similarities";
import { ComicsCharacter } from "./comics-character";

export interface ComicsCharacterSimilarities extends CharactersSimilarities {
    apparitionYear: string
}