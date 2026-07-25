import styles from './page.module.css';

export default function Page() {
  return (
    <div className='flex flex-col min-h-screen justify-center items-center'>
      <div className='flex flex-col justify-center items-center text-center w-[327px]'>
        <div className='flex justify-between items-center text-center w-full'>
          <div className={`${styles.logo} w-[30px] h-[34px] bg-no-repeat bg-center bg-contain`}></div>
          <div className='flex flex-row items-center justify-center'>
            <button className={`${styles.icon_arrow} w-[98px] h-[24px] bg-no-repeat bg-right text-[14px] font-bold pl-1`}>Serif</button>
            <div className={`${styles.divider_v}`}></div>
            <div className='flex flex-row items-center justify-center'>
              <input type="checkbox" id="toggle-switch" hidden/>
              <label htmlFor="toggle-switch" className={`${styles.switch}`}></label>
            </div>
            <button className={`${styles.icon_moon} w-[22px] h-[22px] bg-no-repeat bg-center bg-contain cursor-pointer ml-2`}></button>
          </div>
        </div>
        <form className='flex justify-between items-center w-full rounded-2xl h-[48px] bg-search-bar w-full mt-6'>
          <input  type="text" placeholder='keyboard' className='text-xs focus:outline-none ml-6 font-bold placeholder:text-base placeholder:text-dark-heading'/>
          <div className={`${styles.icon_search} w-[18px] h-[18px] bg-no-repeat bg-center bg-contain mr-6`}></div>
        </form>
        <div className='flex flex-row justify-between items-center w-full mt-5'>
          <div className='flex flex-col text-left'>
            <div className='font-bold text-[32px]'>keyboard</div>
            <div className='text-light-purple text-lg'>pronunciation</div>
          </div>
          <div className={`${styles.icon_play} w-[48px] h-[48px] bg-no-repeat bg-center bg-contain`}></div>
        </div>
        <div className='flex flex-col text-left w-full mt-6'>
          <div className='flex flex-row justify-between items-center'>
            <div className='font-bold text-lg italic mr-4'>noun</div>
            <div className={`${styles.divider_h}`}></div>
          </div>
          <div className='mt-6'>Meaning</div>
        </div>
      </div>
    </div>
  );
}
