import cherriesImg from '../../static/images/image-graphic-design.jpg'
import cherriesImgDesk from '../../static/images/image-graphic-design-desk.jpg'

const Cherries = () => {
  return (
    <>
      <img className='md:hidden w-full h-auto' src={cherriesImg} alt='cherries' />
      <img className='hidden md:block w-full h-auto' src={cherriesImgDesk} alt='cherries' />
    </>
  )
}

export default Cherries
