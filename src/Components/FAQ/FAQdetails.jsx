

const FAQdetails = ({ details }) => {
  return (
    <>
      <div>
        {
          details.map((val, ind) => {
            return (
              <>
                <div key={ ind } className={`flex justify-between border-t-2 border-white px-2 py-3 md:px-4 md:py-6 ${ ind === 5 ? "border-b-2" : "" } text-xl md:text-3xl lg:text-lg`}>
                  <h5>
                    { val.heading }
                  </h5>

                  <i class="ri-add-line"></i>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default FAQdetails
