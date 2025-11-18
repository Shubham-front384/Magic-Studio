import Poster1 from "../../assets/home-poster1.png"
import Poster2 from "../../assets/home-poster2.jpg"
import Poster3 from "../../assets/home-poster3.png"
import Poster4 from "../../assets/home-poster4.png"
import Poster5 from "../../assets/home-poster5.png"

const HomeUpgrade = () => {

  const Img = [
    {
      img: Poster1,
    },
    {
      img: Poster2,
    },
    {
      img: Poster3,
    },
    {
      img: Poster4,
    },
    {
      img: Poster5,
    },
  ];

  return (
    <>
      <div className="home-upgrade-detail flex flex-col gap-4 text-end relative md:gap-6 lg:gap-32">
        <h4 className='uppercase text-amber-200 underline font-semibold text-xl md:text-3xl'>upgrade</h4>
        <p className='text-white uppercase text-5xl font-semibold md:text-9xl lg:text-[6rem]'>create image<br /><br /><br /> <span className='absolute top-[8.5rem] w-[18rem] right-4 md:w-[38rem] md:top-[19rem] lg:top-[22rem]'><span className='mr-8'>from text</span> <span className='text-end'>using ai</span></span></p>
        
        <div className="home-upgrade-images w-9 flex flex-col gap-2 absolute left-4 md:w-20 md:left-24 lg:left-10">
          {
            Img.map((val) => (
            <img src={ val.img } alt="poster-img" />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default HomeUpgrade
