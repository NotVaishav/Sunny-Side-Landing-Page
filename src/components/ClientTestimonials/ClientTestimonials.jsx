import EmilyPP from '../UI/EmilyPP'
import JeaniePP from '../UI/JeaniePP'
import ThomasPP from '../UI/ThomasPP'
import ClientTestimonialItem from './ClientTestimonialItem'

const ClientTestimonials = props => {
  const CLIENTS = [
    {
      imgSource: <EmilyPP />,
      summary: `We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.`,
      name: 'Emily R.',
      title: 'Marketing Director'
    },
    {
      imgSource: <ThomasPP />,
      summary: `Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.`,
      name: 'Thomas S.',
      title: 'Chief Operating Officer'
    },
    {
      imgSource: <JeaniePP />,
      summary: `Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!`,
      name: 'Jennie F.',
      title: 'Business Owner'
    }
  ]

  return (
    <div className='my-16 text-center font-[Fraunces] text-[#a8a7a6] text-lg tracking-widest lg:my-24'>
      <h1>CLIENT TESTIMONIALS</h1>
      <div className=' lg:flex lg:w-[80%] lg:mx-auto '>
        {CLIENTS.map(client => {
          return (
            <ClientTestimonialItem
              imgSource={client.imgSource}
              summary={client.summary}
              name={client.name}
              title={client.title}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ClientTestimonials
