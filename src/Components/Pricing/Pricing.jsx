import Pricingdetail from './Pricingdetail';

const Pricing = () => {

  let pricingInfo = [
    {
      heading: 'create 20 pictures for free no credit card needed!',
      para: 'Upgrade to create unlimited pictures.'
    },
    {
      heading: 'yearly',
      subHeading: 'us$ 4.00/month',
      para: 'us$ 59.99 billed every year',
      offer: 'save 67%',
    },
    {
      heading: '6 monthly',
      subHeading: 'us$ 12.49/month',
      para: 'us$ 74.99 billed every 6 months',
      offer: 'save 17%',
    },
    {
      heading: 'monthly',
      subHeading: 'us$ 14.99/month',
      para: '',
      offer: '',
    }
  ]

  let slicePricingInfo = pricingInfo.slice(1);

  return (
    <>
      <section className="main-pricing  px-5 pb-17 flex flex-col gap-8 md:px-6 md:pb-28 md:gap-14 lg:px-7 lg:pb-28 lg:gap-28">
        <div className="pricing-info flex flex-col gap-4">
          <h4 className='uppercase text-start font-semibold text-4xl md:text-8xl lg:text-[5.11rem]'>{ pricingInfo[0].heading }</h4>
          <p className='text-xl text-gray-400 md:text-3xl lg:text-lg'>{ pricingInfo[0].para }</p>
        </div>

        <Pricingdetail details={ slicePricingInfo } />
      </section>
    </>
  )
}

export default Pricing
