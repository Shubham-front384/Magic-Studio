import HomeLeft from "./HomeLeft"
import HomeRight from "./HomeRight"
import Loved from "./Loved"


const Home = () => {
  return (
    <>
      <section>
        <div className="flex flex-col gap-10 md:gap-12 justify-between items-start">
          <div className="left-right flex flex-col gap-10 md:gap-12 lg:flex-row lg:gap-0">
            <HomeLeft />
            <HomeRight />
          </div>
          <Loved />
        </div>
      </section>
    </>
  )
}

export default Home
