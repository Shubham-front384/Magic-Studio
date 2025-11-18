import Valuetop from './Valuetop'
import Valuemiddle from './Valuemiddle'
import Valuebottom from './Valuebottom'

const Value = () => {
  return (
    <>
      <section className='px-5 py-17 flex flex-col gap-8 md:px-6 md:py-28 md:gap-14 lg:px-7 lg:py-28 lg:gap-28'>
        <Valuetop />
        <Valuemiddle />
        <Valuebottom />
      </section>
    </>
  )
}

export default Value
