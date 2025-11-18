import React from 'react'

const Footer = () => {

  let footerData = [
    {
      heading: 'join our affiliate program',
      para: 'Earn 25% for every customer you refer!'
    },
    {
      heading: 'legal',
      para: 'Privacy Policy',
      para1: 'Terms of service'
    }
  ]

  return (
    <>
      <section className="main-footer px-5">
        <div className="footer-info flex flex-col gap-2 md:flex-row md:justify-between">
          {
            footerData.map((val, ind) => {
              return (
                <>
                  <div key={ ind } className={`${ ind === 1 ? "text-end" : "" }`}>
                    <h5 className="heading uppercase text-lg md:text-3xl lg:text-4xl">
                      { val.heading }
                    </h5>
                    <p className="para text-gray-400 text-base md:text-xl lg:text-3xl">
                      { val.para }
                    </p>
                    <p className="para text-gray-400 text-base md:text-xl lg:text-3xl">
                      { val.para1 }
                    </p>
                  </div>
                </>
              )
            })
          }
        </div>
        <div className="footer-heading pt-4">
          <h3 className='uppercase text-6xl font-semibold text-center md:text-[8rem] lg:text-[12rem]'>
            magicstudio
          </h3>
        </div>
      </section>
    </>
  )
}

export default Footer
