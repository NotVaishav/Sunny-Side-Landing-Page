const MidSection = props => {
  return (
    <div className='relative lg:w-1/2'>
      <div className='absolute z-10 top-[65%] w-full'>
        <div
          className={
            'flex flex-col justify-center items-center font-["Fraunces"] text-[#25564b] px-4' +
            props.colorClass
          }
        >
          <div className='text-2xl font-extrabold'>{props.titleSection}</div>
          <div className='text-center my-5 font-["Barlow"] text-[18px]'>
            {props.summarySection}
          </div>
        </div>
      </div>
      {props.imgSection}
    </div>
  )
}

export default MidSection
