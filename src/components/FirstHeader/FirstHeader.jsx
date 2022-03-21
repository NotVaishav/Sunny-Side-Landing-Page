import ArrowDown from '../UI/ArrowDown'
import HeaderOrange from '../UI/HeaderOrange'

const FirstHeader = props => {
  return (
    <div
      className=' relative flex justify-center z-0'
      onClick={props.onBodyClick}
    >
      <HeaderOrange />
      <div className='absolute top-1/4 font-["Fraunces"] text-center text-white text-[2.8rem] tracking-widest leading-[3.5rem] md:text-[3.5rem]'>
        WE ARE CREATIVES
      </div>
      <div className='absolute top-[53%] md:top-[45%]'>
        <ArrowDown />
      </div>
    </div>
  )
}

export default FirstHeader
