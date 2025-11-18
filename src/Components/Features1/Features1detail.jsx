import React from 'react'

const Features1detail = ({ details }) => {
  return (
    <>
      <div className="carousel1 overflow-x-auto">
        <div className="group1 flex gap-2">
          {
            details.map((val, ind) => {
              return (
                <>
                  <div key={ ind } className="card1 flex flex-col justify-between p-4 border-2 border-white rounded-2xl h-[20rem] md:h-[38rem] md:p-12 lg:h-[32rem]">
                    <h6 className='text-xl md:text-3xl lg:text-lg'>
                      { val.num }
                    </h6>
                    <div className='flex flex-col gap-2 md:gap-6'>
                      <h4 className='uppercase text-2xl font-semibold md:text-5xl lg:text-3xl'>
                        { val.heading }
                      </h4>
                      <p className='text-xl text-gray-400 md:text-3xl lg:text-lg'>
                        { val.para }
                      </p>
                      <a href="#" className='uppercase font-semibold text-center bg-amber-300 text-black px-12 py-4 rounded-full md:text-5xl lg:text-3xl'>
                        try it now
                      </a>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Features1detail
