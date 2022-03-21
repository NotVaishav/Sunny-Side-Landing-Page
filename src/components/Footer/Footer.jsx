import Facebook from '../UI/Facebook'
import Instagram from '../UI/Instagram'
import Pinterest from '../UI/Pinterest'
import Twitter from '../UI/Twitter'
import './Footer.css'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-[#90d4c5] py-16 text-[#458c7e] font-[Barlow]'>
      <div className='text-[36px] font-extrabold '>sunnyside</div>
      <ul className='flex footer-list my-10 text-xl'>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <div className='flex my-10'>
        <Facebook />
        <Instagram />
        <Twitter />
        <Pinterest />
      </div>
    </div>
  )
}

export default Footer
