'use client'
import { useState, ChangeEvent } from 'react'
import styles from './page.module.css';

export default function Page() {
  const darkBgStyle = 'bg-dark';
  const lightBgStyle = 'bg-light';
  const darkTxtStyle = 'text-dark';
  const lightTxtStyle = 'text-light';
  const darkDividerStyle = 'bg-dark-divider';
  const lightDividerStyle = 'bg-light-divider';
  const borderStyleRegular = 'border-search-bar focus:border-light-purple'
  const borderStyleError = 'border-error focus:border-error'
  
  const [lightTheme, setLightTheme] = useState(true);
  const [themeSwitch, setThemeSwitch] = useState(false);
  const [word, setWord] = useState('');
  const [wordError, setWordError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMsgVisible, setIsMsgVisible] = useState(false);

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
    setWord(event.target.value);
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

  function handleShortenLinks(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setWordError(false);
    validateWord(word);
  }

  return (
    <div className={`${lightTheme ? lightBgStyle : darkBgStyle} min-h-screen flex flex-col items-center`}>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center text-center w-[327px] md:w-[736px]'>
          <div className='flex justify-between items-center text-center w-full mt-6 md:mt-14'>
            <div className={`${styles.logo} w-[30px] h-[34px] md:w-[34px] md:h-[38px] bg-no-repeat bg-center bg-contain`}></div>
            <div className='flex flex-row items-center justify-center'>
              <button className={`${styles.icon_arrow} ${lightTheme ? darkTxtStyle : lightTxtStyle} w-[98px] h-[24px] bg-no-repeat bg-right text-[14px] md:text-[18px] font-bold pl-1 md:pr-1`}>Serif</button>
              <div className='h-[32px] w-[1px] bg-light-divider mx-4 md:mx-6'></div>
              <div className='flex flex-row items-center justify-center'>
                <input type="checkbox" id="theme-toggle" hidden/>
                <label htmlFor="theme-toggle" className={`${styles.switch}`} onClick={handleThemeSwitcher}></label>
              </div>
              <button className={`${styles.icon_moon} w-[22px] h-[22px] bg-no-repeat bg-center bg-contain ml-2 md:ml-5`}></button>
            </div>
          </div>
          <div className='flex flex-col w-full text-left'>
            <form className='flex justify-between items-center w-full h-[48px] md:h-[64px] mt-6 md:mt-14 relative' onSubmit={handleShortenLinks}>
              <label htmlFor="word"></label>
              <input  type="text" id='word' placeholder='Search for any word...' 
              className={`${wordError ? borderStyleError : borderStyleRegular} 
              pl-6 mb-1 h-full w-full bg-search-bar outline-none border-1 hover:border-1 focus:border-1 hover:border-light-purple rounded-2xl font-bold placeholder:text-base placeholder:text-placeholder md:placeholder:text-xl text-[16px] md:text-[20px] cursor-pointer caret-light-purple`}
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
                <div className={`${lightTheme ? darkTxtStyle : lightTxtStyle} font-bold text-[32px] md:text-[64px]`}>keyboard</div>
                <div className='text-light-purple text-lg md:text-2xl'>pronunciation</div>
              </div>
              <button className={`${styles.play} cursor-pointer`}></button>
            </div>
            <div className='flex flex-col text-left w-full mt-6 md:mt-8'>
              <div className='flex flex-row justify-between items-center'>
                <div className={`${lightTheme ? darkTxtStyle : lightTxtStyle} font-bold text-lg md:text-2xl italic mr-4`}>noun</div>
                <div className={`${lightTheme ? lightDividerStyle : darkDividerStyle} w-[262px] md:w-[656px] h-[1px] mx-4`}></div>
              </div>
              <div className='text-light-heading mt-6 md:mt-10 md:text-xl'>Meaning</div>
              <ul className={`${styles.ul} ${lightTheme ? darkTxtStyle : lightTxtStyle}`}>
                <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
                <li>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</li>
                <li>A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</li>
              </ul>
              <div className='flex items-center mt-3 md:mt-12 md:text-[20px]'>
                <div className='text-light-heading mr-6'>Synonyms</div>
                <div className='font-bold text-light-purple cursor-pointer hover:underline'>electronic keyboard</div>
              </div>
            </div>
            <div className='flex flex-col text-left w-full mt-7 md:mt-9'>
              <div className='flex flex-row justify-between items-center'>
                <div className={`${lightTheme ? darkTxtStyle : lightTxtStyle} font-bold text-lg md:text-2xl italic mr-4`}>verb</div>
                <div className={`${lightTheme ? lightDividerStyle : darkDividerStyle} w-[262px] md:w-[656px] h-[1px] mx-4`}></div>
              </div>
              <div className='text-light-heading mt-6 md:mt-9 md:text-xl'>Meaning</div>
              <ul className={`${styles.ul} ${lightTheme ? darkTxtStyle : lightTxtStyle}`}>
                <li>To type on a computer keyboard.</li>
              </ul>
              <div className='text-[15px] md:text-[18px] text-light-heading ml-6 mt-1 md:ml-12'>“Keyboarding is the part of this job I hate the most.”</div>
              <div className={`${lightTheme ? lightDividerStyle : darkDividerStyle} w-full h-[1px] mt-8`}></div>
            </div>
            <div className='flex flex-col md:flex-row text-left text-[14px] mt-8 mb-12 w-full'>
              <div className='text-light-heading underline mb-1 md:mr-5'>Source</div>
              <div className={`${lightTheme ? darkTxtStyle : lightTxtStyle} flex`}>
                <div className='mr-2'>https://en.wiktionary.org/wiki/keyboard</div>
                <div className={`${styles.icon_new_window} w-[14px] h-[14px]`}></div>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
}
