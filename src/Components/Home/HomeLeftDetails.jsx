import HomeLogin from './HomeLogin'
import HomeUpgrade from './HomeUpgrade'

const HomeLeftDetails = () => {
  return (
    <>
      <div className="parent-left-details flex gap-2.5 px-5 py-4 md:px-6 md:py-5 lg:px-7 lg:py-6">
        <HomeLogin />
        <HomeUpgrade />
      </div>
    </>
  )
}

export default HomeLeftDetails
