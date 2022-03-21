import './ClientTestimonialItem.css'

const ClientTestimonialItem = props => {
  return (
    <>
      <div className=' my-20 flex flex-col items-center justify-center font-[Barlow] px-5'>
        <div className=' rounded-full overflow-hidden my-3 w-1/4'>
          {props.imgSource}
        </div>
        <div className='my-8 text-[#23303e] font-semibold'>{props.summary}</div>
        <div>
          <div className='font-[Fraunces] text-[#23303e]'>{props.name}</div>
          <div>{props.title}</div>
        </div>
      </div>      
    </>
  )
}

export default ClientTestimonialItem
