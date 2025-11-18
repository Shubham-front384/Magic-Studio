import Value1 from '../../assets/ai1.png'
import Value2 from '../../assets/ai2.png'
import Value3 from '../../assets/ai3.png'

const Valuemiddle = () => {
  return (
    <>
      <div className="value-image flex items-center justify-between relative">
        <img src={ Value1 } alt="value-img" className='w-32 h-32 rounded-full md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px]' />
        <img src={Value2} alt="value-img" className='w-32 h-32 rounded-full absolute z-10 left-2/4 md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px]' style={{ transform: "translateX(-50%)" }} />
        <img src={Value3} alt="value-img" className='w-32 h-32 rounded-full md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px]' />
        
        <h4 className="value-image-heading absolute z-20 uppercase font-semibold text-xl w-max left-2/4 md:text-5xl lg:text-7xl" style={{ transform: "translateX(-50%)" }}>
          simple-helpful-quick-powerful
        </h4>
      </div>
    </>
  )
}

export default Valuemiddle
