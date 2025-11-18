import Featuresdetail from './Featuresdetail'

const Features = () => {
  return (
    <>
      <section className='main-section px-5 pb-17 flex flex-col gap-8 md:px-6 md:pb-28 md:gap-14 lg:px-7 lg:pb-28 lg:gap-28'>
        <h2 className="feature-heading uppercase text-start font-semibold text-4xl md:text-8xl lg:text-[5.11rem]">
          how to create stunning ai generated <span className='block text-end'>images?</span>
        </h2>
        <Featuresdetail />
        <a href="#" className="feature-button uppercase text-amber-300 text-2xl border-2 border-white rounded-full text-center py-4 md:text-3xl lg:text-4xl">
          create a picture
        </a>
      </section>
    </>
  )
}

export default Features
