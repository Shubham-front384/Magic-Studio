import Features1detail from "./Features1detail"


const Features1 = () => {

  let fearures1Data = [
    {
      num: 1,
      heading: 'magic eraser',
      para: 'Remove objects, people, text from photos'
    },
    {
      num: 2,
      heading: 'background remover',
      para: 'Remove background, add coloured backgrounds'
    },
    {
      num: 3,
      heading: 'ai image generator',
      para: 'Create pictures from text, with AI'
    },
    {
      num: 4,
      heading: 'image upscaler',
      para: 'Increase size up to 4k without loosing quality'
    },
    {
      num: 5,
      heading: 'photo booth',
      para: 'Trendy profile pictures with AI'
    },
  ]

  return (
    <>
      <section className="main-features1 px-5 pb-17 flex flex-col gap-8 md:px-6 md:pb-28 md:gap-14 lg:px-7 lg:pb-28 lg:gap-12">
        <h4 className="uppercase text-start font-semibold text-4xl md:text-8xl lg:text-[5.11rem]">
          other amazing tools at magic studio
        </h4>

        <Features1detail details={ fearures1Data } />
      </section>
    </>
  )
}

export default Features1
