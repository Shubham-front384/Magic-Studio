

const Resourcestop = ({ details }) => {
  return (
    <>
      <div className="resource-top-detail flex flex-col gap-10">
        {
          details.map((val, ind) => {
            console.log(val);
            return (
              <>
                <div key={ ind } className="resource-top-info border-t-2 border-white pt-3 flex flex-col gap-4 md:pt-5 lg:pt-7 lg:flex-row">
                  <div className={`resource-img-heading order-1 lg:order-2 flex flex-col gap-3 lg:h-[345px] ${ ind === 0 ? "lg:w-[121%]" : "lg:w-[115%]" } `}>
                    <img className="w-full h-full" src={val.img} alt="studio-img" />
                  </div>

                  <div className="resource-info order-2 lg:order-1 flex flex-col gap-4 md:gap-6 lg:gap-8">
                    <h5 className="uppercase text-2xl font-semibold md:text-5xl lg:text-3xl">
                      { val.heading }
                    </h5>

                    <h5 className="text-xl text-gray-400 md:text-3xl lg:text-lg">
                      { val.date }
                    </h5>
                    <p className="text-xl text-gray-400 leading-6 md:text-3xl md:leading-8 lg:text-lg lg:leading-5">
                      { val.para }
                    </p>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default Resourcestop
