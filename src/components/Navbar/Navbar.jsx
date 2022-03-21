import Hamburger from '../UI/Hamburger'
import './Navbar.css'
import { CSSTransition } from 'react-transition-group'

const Navbar = props => {
  const extraClass = props.isHamActive ? '' : ''
  const fillColour = props.isHamActive ? '#84e7ff' : '#FFF'
  return (
    <div className='nav-font flex text-[28px] font-bold justify-between items-center text-white absolute w-full px-5 my-5 z-50'>
      <div >sunnyside</div>
      <div onClick={props.onHamActive} className='md:hidden cursor-pointer'>
        <Hamburger fillColour={fillColour} />
      </div>
      <CSSTransition
        in={props.isHamActive}
        timeout={300}
        classNames='alert'
        mountOnEnter
        unmountOnExit
      >
        <div
          className={
            `${' md:hidden transition-all nav-main-box absolute duration-300 bg-white bottom-auto right-5 left-5 top-[140%] box-border py-7 z-[60]'}` +
            extraClass
          }
        >
          <ul className=' text-[#79767e] flex flex-col items-center text-xl font-semibold nav-list box-border'>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </CSSTransition>
      <ul className=' hidden md:flex font-normal big-screen-list text-lg items-center'>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li
          id='contact-elem'
          className='rounded-3xl px-10 py-10 font-["Fraunces"] text-black'
        >
          CONTACT
        </li>
      </ul>
    </div>
  )
}

export default Navbar
