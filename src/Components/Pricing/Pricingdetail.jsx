import React from 'react'

const Pricingdetail = ({ details }) => {
  return (
    <>
      <div className="pricing-info flex flex-col gap-8">
        {
          details.map((val, ind) => {
            return (
              <>
                <div key={ ind } className="info border-2 border-white flex flex-col gap-4 text-center justify-center py-8 px-4 lg:flex-row lg:items-center lg:justify-between lg:px-15">
                  <div className={`flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10 ${ ind === 0 ? "lg:gap-[6.5rem]" : "" } ${ ind === 2 ? "lg:gap-[7.5rem]" : "" }`}>
                    <h4 className='pricing-base uppercase text-2xl font-semibold md:text-5xl lg:text-3xl'>
                      { val.heading }
                    </h4>
                    <div className='flex flex-col gap-2'>
                      <h4 className='pricing-to-pay uppercase text-xl md:text-3xl lg:text-lg'>
                        { val.subHeading }
                      </h4>
                      <p className='pricing-price uppercase text-xl text-gray-400 md:text-3xl lg:text-lg'>
                        { val.para }
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10'>
                    <h4 className='save-price uppercase text-2xl font-semibold md:text-5xl lg:text-3xl'>
                      { val.offer }
                    </h4>
                    <a href="#" className='uppercase text-2xl font-semibold bg-amber-300 text-black px-18 py-4 rounded-full m-auto md:text-5xl lg:text-3xl'>upgrade</a>
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

export default Pricingdetail
