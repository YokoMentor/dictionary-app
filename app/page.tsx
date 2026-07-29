import styles from './page.module.css';

export default function Page() {
  return (
    <div className='flex flex-col min-h-screen justify-center items-center'>
      <div className='flex flex-col justify-center items-center text-center w-[327px] md:w-[736px]'>
        <div className='flex justify-between items-center text-center w-full mt-2 md:mt-14'>
          <div className={`${styles.logo} w-[30px] h-[34px] md:w-[34px] md:h-[38px] bg-no-repeat bg-center bg-contain`}></div>
          <div className='flex flex-row items-center justify-center'>
            <button className={`${styles.icon_arrow} w-[98px] h-[24px] bg-no-repeat bg-right text-[14px] md:text-[18px] font-bold pl-1 md:pr-1`}>Serif</button>
            <div className={`${styles.divider_v}`}></div>
            <div className='flex flex-row items-center justify-center'>
              <input type="checkbox" id="toggle-switch" hidden/>
              <label htmlFor="toggle-switch" className={`${styles.switch}`}></label>
            </div>
            <button className={`${styles.icon_moon} w-[22px] h-[22px] bg-no-repeat bg-center bg-contain cursor-pointer ml-2 md:ml-5`}></button>
          </div>
        </div>
        <form className='flex justify-between items-center w-full h-[48px] md:h-[64px] mt-6 md:mt-14 relative'>
          <label htmlFor="word"></label>
          <input  type="text" id='word' placeholder='keyboard' className='pl-6 h-full w-full bg-search-bar outline-none focus:border-1 focus:border-light-purple rounded-2xl font-bold placeholder:text-base placeholder:text-dark-heading md:placeholder:text-xl cursor-pointer caret-light-purple'/>
          <div className={`${styles.icon_search} w-[18px] h-[18px] bg-no-repeat bg-center bg-contain mr-6 absolute top-6 bottom-[0] right-[0] cursor-pointer`}></div>
        </form>
        <div className='flex flex-row justify-between items-center w-full mt-5 md:mt-10'>
          <div className='flex flex-col text-left'>
            <div className='font-bold text-[32px] md:text-[64px]'>keyboard</div>
            <div className='text-light-purple text-lg md:text-2xl'>pronunciation</div>
          </div>
          <div className={`${styles.icon_play} w-[48px] h-[48px] md:w-[75px] md:h-[75px] bg-no-repeat bg-center bg-contain cursor-pointer`}></div>
        </div>
        <div className='flex flex-col text-left w-full mt-6 md:mt-8'>
          <div className='flex flex-row justify-between items-center'>
            <div className='font-bold text-lg md:text-2xl italic mr-4'>noun</div>
            <div className={`${styles.divider_h}`}></div>
          </div>
          <div className='text-light-heading mt-6 md:mt-10 md:text-xl'>Meaning</div>
          <ul className={`${styles.ul}`}>
            <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
            <li>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</li>
            <li>A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</li>
          </ul>
          <div className='flex items-center mt-3 md:mt-12 md:text-[20px]'>
            <div className='text-light-heading mr-6'>Synonyms</div>
            <div className='font-bold text-light-purple cursor-pointer'>electronic keyboard</div>
          </div>
        </div>
        <div className='flex flex-col text-left w-full mt-7 md:mt-9'>
          <div className='flex flex-row justify-between items-center'>
            <div className='font-bold text-lg md:text-2xl italic mr-4'>verb</div>
            <div className={`${styles.divider_h}`}></div>
          </div>
          <div className='text-light-heading mt-6 md:mt-9 md:text-xl'>Meaning</div>
          <ul className={`${styles.ul}`}>
            <li>To type on a computer keyboard.</li>
          </ul>
          <div className='text-[15px] md:text-[18px] text-light-heading ml-6 mt-1 md:ml-12'>“Keyboarding is the part of this job I hate the most.”</div>
          <hr className='border-divider mt-8'/>
        </div>
        <div className='flex flex-col md:flex-row text-left text-[14px] mt-8 mb-12 w-full'>
          <div className='text-light-heading underline mb-1 md:mr-5'>Source</div>
          <div className='flex'>
            <div className='mr-2'>https://en.wiktionary.org/wiki/keyboard</div>
            <div className={`${styles.icon_new_window} w-[14px] h-[14px]`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
