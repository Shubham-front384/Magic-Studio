import Nav from "../Nav/Nav"
import HomeLeftDetails from "./HomeLeftDetails"


const HomeLeft = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-6 md:gap-8 lg:md-10">
        <Nav />
        <HomeLeftDetails />
      </div>
    </>
  )
}

export default HomeLeft
