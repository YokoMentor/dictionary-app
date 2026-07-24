import styles from './page.module.css';

export default function Page() {
  return (
    <div className='absolute top-11 md:top-17 flex flex-col justify-center items-center w-[328px] md:w-[540px]'>
      <div className='flex justify-between items-baseline w-full mb-6 md:mb-8'>
        <div className={`${styles.logo} w-[28px] h-[32px]`}></div>
        <div className='flex flex-row items-center justify-center'>
          <input type="checkbox" id="toggle-switch" hidden/>
          <label htmlFor="toggle-switch" className={`${styles.switch}`}></label>
        </div>
        <button className={`${styles.icon_moon} w-[20px] h-[20px] bg-no-repeat bg-center bg-contain cursor-pointer`}></button>
      </div>
    </div>
  );
}
