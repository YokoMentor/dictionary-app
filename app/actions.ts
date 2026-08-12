export interface DataResponse {
  word: string;
  pronunciation: string;
  verb: DataDefinition,
  noun: DataDefinition,
  source: 'https://en.wiktionary.org/wiki/keyboard';
};

export interface DataDefinition {
  partOfSpeech: string,
  meaning: string[],
  synonyms: string[],
  use: string
}

export async function fetchData(word: string): Promise<DataResponse> {
  const result: DataResponse = {
    word: word,
    pronunciation: 'ki\u02C8bɔ\u02C8rd',
    noun:
      {
        partOfSpeech: 'noun',
        meaning: ['(etc.) A set of keys used to operate a typewriter, computer etc.', 'A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.', 'A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.'],
        synonyms: ['electronic keyboard'],
        use:''
      },
    verb:
      {
        partOfSpeech: 'verb',
        meaning: ['To type on a computer keyboard.'],
        synonyms: [],
        use: '“Keyboarding is the part of this job I hate the most.”'
      },
    source: 'https://en.wiktionary.org/wiki/keyboard',
  };

  return result
}
