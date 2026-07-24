import styles from './page.module.css';

export default function Page() {
  return (
    <div className='flex flex-col min-h-screen justify-center items-center'>
      <div className='flex justify-between items-center text-center w-[327px]'>
        <div className={`${styles.logo} w-[28px] h-[32px] bg-no-repeat bg-center`}></div>
        <div className='flex flex-row items-center justify-center'>
          <button className={`${styles.icon_arrow} w-[98px] h-[24px] bg-no-repeat bg-right text-[14px] font-bold pl-2`}>Serif</button>
          <div className={`${styles.divider}`}></div>
          <div className='flex flex-row items-center justify-center'>
            <input type="checkbox" id="toggle-switch" hidden/>
            <label htmlFor="toggle-switch" className={`${styles.switch}`}></label>
          </div>
          <button className={`${styles.icon_moon} w-[22px] h-[22px] bg-no-repeat bg-center bg-contain cursor-pointer ml-2`}></button>
        </div>
      </div>
    </div>
  );
}
