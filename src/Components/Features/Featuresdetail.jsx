import features1 from '../../assets/features1.png'
import features2 from '../../assets/features2.png'
import features3 from '../../assets/features3.png'
import features4 from '../../assets/features4.png'

const Featuresdetail = () => {

  const featureInfo = [
    {
      name: 'box1',
      img: features1,
      heading: 'describe scene',
      para: 'Explain how you imagine ou imagine the picture in sample direct words. Describe in as much detail as possible, be specific and clear. Add descriptions of elements of the scene and setting that will help make the image closer to your interided output'
    },
    {
      name: 'box2',
      img: features2,
      heading: 'select a style',
      para: 'Styles help you adjust and control the look and feel of the picture. Each of our presets represents a popular style in which images are created or depicted and these styles are also liked by generative Alenthusiasts. If you want learn more about the styles, a search on the internet will neip. And do let us know if you want us to add a style that you like but is missing'
    },
    {
      name: 'box3',
      img: features3,
      heading: 'aspect ratio',
      para: "We offer S aspect ratios square, which is tit, a landscape which is 2-1 with the horizontal dimension longer, a port a portrait which is 12 with the vertical dimens er Select an aspect ratio that fits the use you will put the image to. If you don't have a preferenice, we suggest using the square output for best results"
    },
    {
      name: 'box4',
      img: features4,
      heading: 'generate',
      para: 'You can create an image, and then try to create another variation to see a different output each time or go back and tweak your text input. When you are satisfied with the result click download to save the image to your computer or gallery on your phone Downloads happen in an appropriate format for the edit that you have made, can be converted to JPG JPEG PNG HEIC WEBP or other formats as requirect'
    }
  ];

  return (
    <>
      <div className="feature-detail-page flex flex-col gap-10 md:gap-14 lg:gap-y-16 lg:gap-x-4">
        {
          featureInfo.map((val, ind) => {
            return (
              <>
                <div className={`${val.name} key=${ind} flex flex-col gap-6 md:gap-10 ${ ind === 1 ? "lg:ml-[40%]" : "" } ${ ind === 2 || ind === 3 ? "lg:w-[300px]" : "" } ${ ind === 3 ? "lg:mr-[460px]" : "" }`}>
                  <div className="feature-img">
                    <img className={`w-full h-[300px] rounded-4xl md:h-[500px] lg:rounded-[4rem] ${ ind === 0 || ind === 2 || ind === 3 ? "lg:h-[250px]" : "" }`} src={val.img} alt="img" />
                  </div>
                  <div className="feature-info flex flex-col gap-4 md:gap-7 lg:gap-5">
                    <h4 className="feature-heading uppercase text-2xl font-semibold md:text-5xl lg:text-3xl">
                      {val.heading}
                    </h4>
                    <p className="feature-para text-xl text-gray-400 leading-6 md:text-3xl md:leading-8 lg:text-lg lg:leading-5">
                      {val.para}
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

export default Featuresdetail
