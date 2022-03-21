import FirstHeader from './components/FirstHeader/FirstHeader'
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react'
import SecondHeader from './components/SecondHeader/SecondHeader'
import HeaderEgg from './components/UI/HeaderEgg'
import PinkGlass from './components/UI/PinkGlass'
import MidSection from './components/MidSection/MidSection'
import Cherries from './components/UI/Cherries'
import Orange from './components/UI/Orange'
import ClientTestimonials from './components/ClientTestimonials/ClientTestimonials'
import FooterImages from './components/FooterImages/FooterImages'
import Footer from './components/Footer/Footer'

function App () {
  const [isHamActive, setIsHamActive] = useState(false)
  const HEADER_ELEMS = [
    {
      imgSec: <HeaderEgg />,
      titleSec: 'Transform your brand',
      summarySec: `We are a full-service creative agency specializing in helping brands grow fast.
         Engage your clients through compelling visuals that do most of the marketing for you.`,
      borderClass: ' learn-border',
      flexClass: 'flex-row-reverse'
    },
    {
      imgSec: <PinkGlass />,
      titleSec: 'Stand out to the right audience',
      summarySec: `Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters,
       we’ll build and extend your brand in digital places.`,
      borderClass: ' learn-border-pink',
      flexClass: 'flex-row'
    }
  ]

  const MID_ELEMS = [
    {
      imgSec: <Cherries />,
      titleSec: 'Graphic Design',
      summarySec: `Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.`,
      colorClass: ' text-[#25564b]'
    },
    {
      imgSec: <Orange />,
      titleSec: 'Photography',
      summarySec: `Increase your credibility by getting the most stunning,
       high-quality photos that improve your business image.`,
      colorClass: ' text-[#19536b]'
    }
  ]
  const toggleHamHandler = () => {
    setIsHamActive(!isHamActive)
  }

  const disableHam = () => {
    setIsHamActive(false)
  }
  return (
    <div className='App'>
      <Navbar onHamActive={toggleHamHandler} isHamActive={isHamActive} />
      <FirstHeader onBodyClick={disableHam} />
      {HEADER_ELEMS.map(item => {
        return (
          <SecondHeader
            key={item.titleSec}
            onBodyClick={disableHam}
            imgSection={item.imgSec}
            titleSection={item.titleSec}
            summarySection={item.summarySec}
            borderClass={item.borderClass}
            flexClass={item.flexClass}
          />
        )
      })}
      <div className='lg:flex flex-row'>
        {MID_ELEMS.map(item => {
          return (
            <MidSection
              key={item.titleSec}
              onBodyClick={disableHam}
              imgSection={item.imgSec}
              titleSection={item.titleSec}
              summarySection={item.summarySec}
              colorClass={item.borderClass}
            />
          )
        })}
      </div>
      <ClientTestimonials />
      <FooterImages />
      <Footer />
    </div>
  )
}

export default App
