import './SecondHeader.css'

const SecondHeader = props => {
  return (
    <div onClick={props.onBodyClick} className={'lg:flex ' + props.flexClass}>
      <div className='lg:w-1/2'>{props.imgSection}</div>
      <div className='flex flex-col items-center px-6 text-center my-16 text-[#23303e] font-semibold text-lg font-["Fraunces"] lg:w-1/2 justify-center lg:text-left lg:px-32 lg:items-start'>
        <div className='text-3xl font-extrabold lg:text-5xl'>
          {props.titleSection}
        </div>
        <div className='my-8 font-["Barlow"] text-[#818498]'>
          {props.summarySection}
        </div>
        <div
          className={
            ' font-extrabold text-lg learn-border lg:w-max' + props.borderClass
          }
        >
          LEARN MORE
        </div>
      </div>
    </div>
  )
}

export default SecondHeader
