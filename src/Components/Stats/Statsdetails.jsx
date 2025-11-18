

const Statsdetails = () => {
  return (
    <>
      <div className="stats-info flex flex-col text-center gap-8 lg:relative">
        <div className="top-stats-info flex flex-col gap-4 uppercase">
          <h5 className="love-heading text-lg md:text-2xl">
            loved by millions!
          </h5>

          <h2 className="text-5xl font-semibold md:text-7xl">
            120 million images<br /> 18 million user
          </h2>
        </div>

        <div className="text-gray-400 bottom-stats-info leading-4.5 text-base md:text-xl md:leading-6">
          <p className="lg:absolute lg:top-1/2 lg:w-40 lg:text-start -lg:translate-y-1/2">
            MagicStudio is popular around the world.
          </p>
          <p className="lg:absolute lg:top-1/2 lg:right-0 lg:w-56 lg:text-end -lg:translate-y-1/2">
            With every image edited, we put more power in the hands of the people.
          </p>
        </div>
      </div>
    </>
  )
}

export default Statsdetails
