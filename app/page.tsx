'use client'
import { useState, ChangeEvent, useEffect, useRef } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import styles from './page.module.css'
import { DataResponse, fetchData } from './actions'

export default function Page() {
  const darkBgStyle = 'bg-dark';
  const lightBgStyle = 'bg-light';
  const darkMenuStyle = 'bg-dark-search text-light';
  const lightMenuStyle = 'bg-light text-dark-heading';
  const darkMoonStyle = 'stroke-light-purple';
  const lightMoonStyle = 'stroke-light-heading';
  const darkTxtStyle = 'text-dark';
  const lightTxtStyle = 'text-light';
  const darkDividerStyle = 'bg-dark-divider';
  const lightDividerStyle = 'bg-light-divider';
  const darkSearchStyle = 'bg-dark-search border-dark-search text-light placeholder:text-dark-placeholder';
  const lightSearchStyle = 'bg-light-search border-light-search text-dark-heading placeholder:text-light-placeholder';
  const borderStyleRegular = 'border-search-bar focus:border-light-purple'
  const borderStyleError = 'border-error focus:border-error'
  
  const [fontStyleName, setFontStyleName] = useState('Serif');
  const [fontStyle, setFontStyle] = useState('font-sans');
  const [lightTheme, setLightTheme] = useState(true);
  const [themeSwitch, setThemeSwitch] = useState(false);
  const [word, setWord] = useState(useSearchParams().get("word"));
  const [tempWord, setTempWord] = useState('');
  const [wordError, setWordError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMsgVisible, setIsMsgVisible] = useState(false);
  const [dropDownMenuIsVisible, setDropDownMenuIsVisible] = useState(false);
  const [dataResponse, setDataResponse] = useState<DataResponse>();
  const router = useRouter();
  const paramsWord = useSearchParams();
  const audioUrl = '//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3';
  const audioRef = useRef(new Audio(audioUrl));


  function returnHome() {
    window.location.href = '/';
  }
  
  function handleFontChange(selectedFontStyleName: string, selectedFontStyle: string) {
    setFontStyleName(selectedFontStyleName);
    setFontStyle(selectedFontStyle);
  }

  function handleMenuClick() {
    if(!dropDownMenuIsVisible) {
      setDropDownMenuIsVisible(true);
    } else {
      setDropDownMenuIsVisible(false);
    }
  }

  function handleThemeSwitcher() {
    if (themeSwitch) {
      setLightTheme(true);
    } else {
      setLightTheme(false);
    }
    setThemeSwitch(!themeSwitch);
  }
  
  function handleWordChange(event: ChangeEvent<HTMLInputElement>){
    event.preventDefault();
    setTempWord(event.target.value);
    setIsVisible(false);
  }

  function validateWord(value: string) {
    if (value.length == 0) {
      setWordError(true);
    } else {
      setIsVisible(true);
    }
  }

  function isValidWord(value: string) {
    if (value.length == 0) {
      return false;
    }
    return true;
  }

  function handleSearch(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setWord(tempWord);
    router.replace('/?word=' + tempWord);
  }

  useEffect(() => { //when page has been loaded
    if(word === null) {
    } else {
      const init = async() => {
        console.log('hello');
      setWordError(false);
      validateWord(word as string);
      if (isValidWord(word as string)) {
        const data = await fetchData(word as string);
        setDataResponse(data);
      }
    }
    init();
    }
  }, [word, paramsWord]);

  function playAudio(){
    audioRef.current.play();
  };

  return (
    <div className={`${lightTheme ? lightBgStyle : darkBgStyle} ${fontStyle} min-h-screen flex flex-col items-center`}>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center text-center w-[327px] md:w-[736px]'>
          <div className='flex justify-between items-center text-center w-full mt-6 md:mt-14'>
            <div className={`${styles.logo} w-[30px] h-[34px] md:w-[34px] md:h-[38px] bg-no-repeat bg-center bg-contain`} onClick={returnHome}></div>
            <div className='flex flex-row items-center justify-center'>
              <div className='flex flex-row items-center justify-between cursor-pointer w-[100px] md:w-[120px]' onClick={handleMenuClick}>
                <div className={`${lightTheme ? darkTxtStyle : lightTxtStyle} w-[70px] md:w-[92px] text-[14px] md:text-[18px] font-bold text-right`}>{fontStyleName}</div>
                <div className={`${styles.icon_arrow} w-[14px] h-[8px] bg-no-repeat bg-center`}></div>
              </div>
              <div className='h-[32px] w-[1px] bg-light-divider mx-4 md:mx-6'></div>
              <div className='flex flex-row items-center justify-center mr-2 md:mr-5'>
                <input type="checkbox" id="theme-toggle" hidden/>
                <label htmlFor="theme-toggle" className={`${styles.switch}`} onClick={handleThemeSwitcher}></label>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" className={`${lightTheme ? lightMoonStyle : darkMoonStyle}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/></svg>
            </div>
          </div>
          {dropDownMenuIsVisible && <div className='flex justify-center items-center relative z-2'>
            <div className={`${lightTheme ? styles.menu_shadow_light : styles.menu_shadow_dark} ${lightTheme ? lightMenuStyle : darkMenuStyle} flex flex-col justify-center items-start absolute top-0 w-[122px] h-[152px] md:w-[182px] md:h-[152px] rounded-2xl ml-4 md:ml-72 mt-2 md:mt-3 pl-4 md:pl-6 font-bold text-[15px] md:text-[17px]`}>
              <div className='cursor-pointer hover:text-light-purple font-sans' onClick={() => handleFontChange('Sans Serif', 'font-sans')}>Sans Serif</div>
              <div className='cursor-pointer hover:text-light-purple my-4 font-serif' onClick={() => handleFontChange('Serif', 'font-serif')}>Serif</div>
              <div className='cursor-pointer hover:text-light-purple font-mono' onClick={() => handleFontChange('Mono', 'font-mono')}>Mono</div>
            </div>
          </div>}
          <div className='flex flex-col w-full text-left'>
            <form className='flex justify-between items-center w-full h-[48px] md:h-[64px] mt-6 md:mt-14 relative z-1' onSubmit={handleSearch}>
              <label htmlFor="word"></label>
              <input  type="text" id='word' placeholder='Search for any word...' 
              className={`${wordError ? borderStyleError : borderStyleRegular} ${lightTheme ? lightSearchStyle : darkSearchStyle}
              pl-6 mb-1 h-full w-full outline-none border-1 hover:border-1 focus:border-1 hover:border-light-purple rounded-2xl font-bold md:placeholder:text-xl text-[16px] md:text-[20px] cursor-pointer caret-light-purple`}
              onChange={handleWordChange}/>
              <div className={`${styles.icon_search} w-[18px] h-[18px] bg-no-repeat bg-center bg-contain mr-6 absolute top-3 md:top-6 bottom-[0] right-[0] cursor-pointer`}></div>
            </form>
            {wordError && <div className='text-error justify-start'>Whoops, can&rsquo;t be empty…</div>}
          </div>
          {isMsgVisible &&
          <div className='flex flex-col justify-center items-center w-full mt-30'>
            <div className='text-[53px] mb-8'>😕</div>
            <h1 className='text-[21px] font-bold mb-5'>No Definitions Found</h1>
            <p className='text-[19px] leading-6'>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
          </div>}
          {isVisible &&
          <div className='flex flex-col justify-center items-center text-center w-[327px] md:w-[736px]'>
            <div className='flex flex-row justify-between items-center w-full mt-5 md:mt-10'>
              <div className='flex flex-col text-left'>
                <div className={`${lightTheme ? darkTxtStyle : lightTxtStyle} font-bold text-[32px] md:text-[64px]`}>{dataResponse?.word}</div>
                <div className='text-light-purple text-lg md:text-2xl'>{dataResponse?.pronunciation}</div>
              </div>
              <div>
                <button className={`${styles.icon_play} w-[48px] h-[48px] md:w-[75px] md:h-[75px] bg-no-repeat bg-center bg-contain cursor-pointer`} onClick={playAudio}></button>
              </div>
            </div>
            <div className='flex flex-col text-left w-full mt-6 md:mt-8'>
              <div className='flex flex-row justify-between items-center'>
                <div className={`${lightTheme ? darkTxtStyle : lightTxtStyle} font-bold text-lg md:text-2xl italic mr-4`}>{dataResponse?.noun.partOfSpeech}</div>
                <div className={`${lightTheme ? lightDividerStyle : darkDividerStyle} w-[262px] md:w-[656px] h-[1px] mx-4`}></div>
              </div>
              <div className='text-light-heading mt-6 md:mt-10 md:text-xl'>Meaning</div>
              <ul className={`${styles.ul} ${lightTheme ? darkTxtStyle : lightTxtStyle}`}>
                {dataResponse?.noun.meaning.map((value, i) => (
                  <li key={i}>{value}</li>
                ))}
              </ul>
              <div className='flex items-top mt-3 md:mt-12 md:text-[20px]'>
                <div className='text-light-heading mr-6'>Synonyms</div>
                <ul className='font-bold text-light-purple list-none cursor-pointer'>
                  {dataResponse?.noun.synonyms.map((value, i) => (
                    <li className='hover:underline' key={i}><a href={`/?word=${value}`} target='_blank' rel='noopener noreferrer'>{value}</a></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='flex flex-col text-left w-full mt-7 md:mt-9'>
              <div className='flex flex-row justify-between items-center'>
                <div className={`${lightTheme ? darkTxtStyle : lightTxtStyle} font-bold text-lg md:text-2xl italic mr-4`}>{dataResponse?.verb.partOfSpeech}</div>
                <div className={`${lightTheme ? lightDividerStyle : darkDividerStyle} w-[262px] md:w-[656px] h-[1px] mx-4`}></div>
              </div>
              <div className='text-light-heading mt-6 md:mt-9 md:text-xl'>Meaning</div>
              <ul className={`${styles.ul} ${lightTheme ? darkTxtStyle : lightTxtStyle}`}>
                {dataResponse?.verb.meaning.map((value, i) => (
                  <li key={i}>{value}</li>
                ))}
              </ul>
              <div className='text-[15px] md:text-[18px] text-light-heading ml-6 mt-1 md:ml-12'>“{dataResponse?.verb.use}”</div>
              <div className={`${lightTheme ? lightDividerStyle : darkDividerStyle} w-full h-[1px] mt-8`}></div>
            </div>
            <div className='flex flex-col md:flex-row text-left text-[14px] mt-8 mb-12 w-full underline'>
              <div className='text-light-heading mb-1 md:mr-5'>Source</div>
              <div className={`${lightTheme ? darkTxtStyle : lightTxtStyle} flex`}>
                <a className='mr-2' href={dataResponse?.source} target='_blank' rel='noopener noreferrer'>{dataResponse?.source}</a>
                <div className={`${styles.icon_new_window} w-[14px] h-[14px]`}></div>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
}
