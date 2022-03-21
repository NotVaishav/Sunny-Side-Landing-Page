import imageHeader from '../../static/images/image-header.jpg'
import headerDesk from '../../static/images/image-header-desk.jpg'

const HeaderOrange = () => {
  return (
    <>
      <img className='hidden md:block w-full h-auto' src={headerDesk} alt='half-orange-desk' />
      <img className='md:hidden w-full h-auto' src={imageHeader} alt='half-orange' />
    </>
  )
}

export default HeaderOrange
