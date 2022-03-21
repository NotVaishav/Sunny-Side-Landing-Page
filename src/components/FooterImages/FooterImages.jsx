import coneImage from '../../static/images/image-gallery-cone.jpg'
import milkImage from '../../static/images/image-gallery-milkbottles.jpg'
import sugarImage from '../../static/images/image-gallery-sugarcubes.jpg'
import orangeImage from '../../static/images/image-gallery-orange.jpg'
import FooterImageItem from './FooterImageItem'

const FooterImages = () => {
  const IMAGE_LIST = [
    { imageSrc: milkImage, alt: 'milk-image' },
    { imageSrc: orangeImage, alt: 'orange-image' },
    { imageSrc: coneImage, alt: 'cone-image' },
    { imageSrc: sugarImage, alt: 'sugar-image' }
  ]

  return (
    <div className=' flex flex-wrap'>
      {IMAGE_LIST.map(image => {
        return (
          <FooterImageItem imageSrc={image.imageSrc} imageAlt={image.alt} />
        )
      })}
    </div>
  )
}

export default FooterImages
