const FooterImageItem = props => {
  return (
    <div className=" flex-[50%] lg:flex-[0%]">
      <img
        className='w-full'
        src={props.imageSrc}
        alt={props.imageAlt}
      />
    </div>
  )
}

export default FooterImageItem
