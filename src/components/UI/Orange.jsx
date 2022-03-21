import orangeImg from '../../static/images/image-photography.jpg'
import orangeImgDesk from '../../static/images/image-photography-desk.jpg'

const Orange = () => {
  return (
    <>
      <img className='md:hidden w-full h-auto' src={orangeImg} alt='orange-mid' />
      <img className='hidden md:block w-full h-auto' src={orangeImgDesk} alt='orange-mid' />
    </>
  )
}

export default Orange
