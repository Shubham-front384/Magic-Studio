import review from '../../assets/review.png'

const Testimonialdetails = () => {

  let testimonialInfo = [
    {
      heading: 'reviews',
      subHeading: 'my brain is breaking 🤯',
      img: review,
      name: 'matthew ritchie',
      author: 'Writer at Nook Calendar',
      para: 'My brain is breaking 🤯 This looks so simple! I use the Adobe suite, but know a lot of people at startups/independent companies who are short on cash who could use this. Great idea!',
      link: 'We have 946 more like this...'
    },
  ];

  return (
    <>
      <div className="testimonial-detail">
        {
          testimonialInfo.map((val, ind) => {
            return (
              <>
                <div className="testimonial-info flex flex-col gap-8 md:flex-row md:gap-10 lg:gap-72 lg:relative" key={ ind }>
                  <h2 className="testimonial-heading flex flex-col gap-4 uppercase text-start font-semibold text-4xl md:text-8xl lg:text-[5.11rem]">
                    { val.heading } <span className='block text-start uppercase text-2xl font-semibold md:text-5xl lg:text-3xl lg:absolute lg:top-1/4 lg:right-[14%]'>{ val.subHeading }</span>
                  </h2>
                  <div className='flex flex-col gap-8 lg:mt-40'>
                    <div className="image-author flex gap-8">
                      <div className="image">
                        <img src={ val.img } alt="review-img" />
                      </div>
                      <div className="author">
                        <p className='text-lg capitalize flex flex-col gap-4 md:text-2xl lg:text-xl'>{ val.name }<br /> <span className=''>{ val.author }</span></p>
                      </div>
                    </div>
                    <p className='text-xl text-gray-400 leading-6 md:text-3xl md:leading-8 lg:text-lg lg:leading-5'>
                      { val.para }
                    </p>
                    <a href="#" className='text-xl text-gray-400 leading-6 md:text-3xl md:leading-8 lg:text-lg lg:leading-5 border-b-2 w-max'>
                      { val.link }
                    </a>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default Testimonialdetails
