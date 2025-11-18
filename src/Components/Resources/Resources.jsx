import Resourcestop from './Resourcestop'
import Resourcesbottom from './Resourcesbottom'

import studio1 from '../../assets/studio1.png'
import studio2 from '../../assets/studio2.png'
import studio3 from '../../assets/studio3.png'
import studio4 from '../../assets/studio4.png'

const Resources = () => {

  let resourceData = [
    {
      img: studio1,
      heading: 'HOW TO REMOVE BACKGROUND EASILY WITH BACKGROUND ERASER',
      date: 'SEP 15, 2023',
      para: 'Learn how to effortlessly remove backgrounds from photos using Background Eraser, simplifying your editing process and creating stunning, isolated subjects.'
    },
    {
      img: studio2,
      heading: 'WHAT AI CAN AND CANNOT DO TODAY, AND WHY YOU SHOULD PAY ATTENTION',
      date: 'AUG 14, 2023',
      para: 'This is your guide to understand what Al can do amazingly well today: so you can make the most of it. Look beyond the hype, and understand the limits.'
    },
    {
      img: studio3,
      heading: 'ULTIMATE GUIDE TO PRODUCT PHOTOGRAPHY',
      date: 'JUL 15, 2023',
      para: 'Master the art of product photography with our comprehensive guide, covering everything from equipment and lighting to composition and editing techniques, ensuring your products shine in every shot.'
    },
    {
      img: studio4,
      heading: 'DIY PRODUCT PHOTOGRAPHY: A STEP-BY-STEP GUIDE',
      date: 'JUN 10, 2023',
      para: 'Discover the step-by-step process of creating professional-looking product photos on a budget. empowering you to showcase your products effectively without the need for expensive equipment or a professional photographer'
    },
  ]

  let firstSlice = resourceData.slice(0, 2);
  let secondSlice = resourceData.slice(2);

  return (
    <>
      <section className="main-resources px-5 pb-17 flex flex-col gap-8 md:px-6 md:pb-28 md:gap-14 lg:px-7 lg:pb-28 lg:gap-12">
        <h4 className='uppercase text-start font-semibold text-4xl md:text-8xl lg:text-[5.11rem]'>
          learn all about ai image editing at magic studio <span className='block text-end'>academy</span>
        </h4>
        <div className="resources-divide flex flex-col gap-10">
          <Resourcestop details={ firstSlice } />
          <Resourcesbottom details={ secondSlice } />
        </div>
      </section>
    </>
  )
}

export default Resources
