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
  const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word);
  const resultData = await response.json();
  const firstResult = resultData[0];

  const result: DataResponse = {
    word: firstResult.word,
    pronunciation: firstResult.phonetic,
    noun:
      {
        partOfSpeech: 'noun',
        meaning: [],
        synonyms: [],
        use:''
      },
    verb:
      {
        partOfSpeech: 'verb',
        meaning: [],
        synonyms: [],
        use: ''
      },
    source: firstResult.sourceUrls[0],
  };

  for(let i = 0; i < firstResult.meanings.length; i++) {
    if(firstResult.meanings[i].partOfSpeech === 'noun') {
      result.noun.partOfSpeech = 'noun'

      for(let j = 0; j < firstResult.meanings[i].definitions.length; j++) {
        result.noun.meaning.push(firstResult.meanings[i].definitions[j].definition);
      }

      for(let k = 0; k < firstResult.meanings[i].definitions.length; k++) {
        result.noun.synonyms.push(firstResult.meanings[i].synonyms[k]);
      }

      result.noun.use = ''
    } 

    if(firstResult.meanings[i].partOfSpeech === 'verb') {
      result.verb.partOfSpeech = 'verb'
      
      for(let j = 0; j < firstResult.meanings[i].definitions.length; j++) {
        result.verb.meaning.push(firstResult.meanings[i].definitions[j].definition);
      }

      result.verb.synonyms = [];

      for(let k = 0; k < firstResult.meanings[i].definitions.length; k++) {
        result.verb.use = firstResult.meanings[i].definitions[k].example;
      }
    } 
  }
   return result
}

  //for loop ja kysin kas part of speetch on verb v6i notFound. Kui on Vesper_Libre, siis t2idan result.verb osa
