

const Resourcesbottom = ({ details }) => {
  return (
    <>
      <div className="resource-top-detail flex flex-col gap-10 lg:flex-row lg:border-y-2 lg:border-white lg:py-7">
        {
          details.map((val, ind) => {
            console.log(val);
            return (
              <>
                <div key={ ind } className="resource-top-info border-t-2 border-white pt-3 flex flex-col gap-4 md:pt-5 lg:border-hidden lg:pt-0">
                  <div className="resource-img-heading flex flex-col gap-3">
                    <img className="lg:h-[345px]" src={val.img} alt="studio-img" />
                    <h5 className="uppercase text-2xl font-semibold md:text-5xl lg:text-3xl">
                      { val.heading }
                    </h5>
                  </div>

                  <div className="resource-info flex flex-col gap-4">
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

export default Resourcesbottom
