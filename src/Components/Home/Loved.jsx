import Logo1 from "../../assets/logo1.png"
import Logo2 from "../../assets/logo2.png"
import Logo3 from "../../assets/logo3.png"
import Logo4 from "../../assets/logo4.png"
import Logo5 from "../../assets/logo5.png"

const Loved = () => {

  let logo = [
    {
      img: Logo1,
    },
    {
      img: Logo2,
    },
    {
      img: Logo3,
    },
    {
      img: Logo4,
    },
    {
      img: Logo5,
    },
  ]

  return (
    <>
      <div className="loved-parent flex flex-col gap-12 relative">
        <h2 className='uppercase text-4xl font-semibold px-5 py-4 md:px-6 md:py-5 md:text-8xl lg:px-7 lg:py-6 lg:text-[5.11rem]'>loved by professionals across the <span className='ml-32 md:ml-[21.5rem] lg:ml-[28rem]'>world</span></h2>
      </div>

      <div className="carousel flex mx-auto overflow-x-auto w-[90%]">
        <div className="group flex items-center justify-center">
          {
            logo.map((val) => (
              <div className="card h-20 p-4 flex items-center justify-center border-2 border-white md:h-48">
                <img className="w-[10rem]" src={val.img} alt="logo-img" />
              </div>
            ))
          }
        </div>

        {/* use in feature */}
        {/* <div aria-hidden className="group flex items-center justify-center">
          {
            logo.map((val) => (
              <div className="card h-20 p-4 text-center content-center border-2 border-white" style={{ flex: "0 0 5em" }}>
                <img className="" src={val.img} alt="logo-img" />
              </div>
            ))
          }
        </div> */}
      </div>
    </>
  )
}

export default Loved
