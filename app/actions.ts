export interface dataResponse {
  word: string;
  pronunciation: string;
  definition: {
    partOfSpeech: 'noun' | 'verb';
    meaning: string[];
  };
  synonyms: string[];
  source: string
};
