

const Valuebottom = () => {

  let content = [
    {
      heading: "simple",
      para: "No skill or experience required, just say it like you think it."
    },
    {
      heading: "helpful",
      para: "Use preset styles and aspect ratios to explore various modes."
    },
    {
      heading: "quick",
      para: "With AI generated images, create and express your imagination in seconds."
    },
    {
      heading: "powerful",
      para: "Powerful enough for professional creators to use everyday."
    }
  ]

  return (
    <>
      <div className="value-bottom-deatils flex flex-col gap-8 md:gap-10 lg:flex-row">
        {
          content.map((val) => (
            <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
              <h2 className="bottom-heading uppercase text-xl md:text-4xl lg:text-3xl">
                { val.heading }
              </h2>
              <p className="bottom-para text-gray-400 text-lg md:text-3xl lg:text-lg">
                { val.para }
              </p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Valuebottom
