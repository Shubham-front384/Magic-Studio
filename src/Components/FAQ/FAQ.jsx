import React from 'react'
import FAQdetails from './FAQdetails'

const FAQ = () => {

  let faqData = [
    {
      heading: 'frequently asked questions',
      para: "Can't find the answer here? Please reach out to us at help @magicstudio.com"
    },
    {
      heading: 'What is AI Image Generator?',
      para: "Can't find the answer here? Please reach out to us at help @magicstudio.com"
    },
    {
      heading: 'How does AI Image Generator work?',
      para: "Can't find the answer here? Please reach out to us at help @magicstudio.com"
    },
    {
      heading: 'What are the practical applications of AI Image Generator?',
      para: "Can't find the answer here? Please reach out to us at help @magicstudio.com"
    },
    {
      heading: 'How long does it take to create an image with AI Image Generator?',
      para: "Can't find the answer here? Please reach out to us at help @magicstudio.com"
    },
    {
      heading: 'Is there an iOS or Android app for AI Image Generator?',
      para: "Can't find the answer here? Please reach out to us at help @magicstudio.com"
    },
    {
      heading: 'Is AI Image Generator free to use?',
      para: "Can't find the answer here? Please reach out to us at help @magicstudio.com"
    },
  ]

  let sliceFaqData = faqData.slice(1);

  return (
    <>
      <section className="main-faq px-5 pb-17 flex flex-col gap-8 md:px-6 md:pb-28 md:gap-14 lg:px-7 lg:pb-28 lg:gap-12">
        <div className="faq-info flex flex-col gap-4">
          <h4 className="faq-heading uppercase text-start font-semibold text-4xl md:text-8xl lg:text-[5.11rem]">
            { faqData[0].heading }
          </h4>
          <p className="faq-para text-xl text-gray-400 md:text-3xl lg:text-lg">
            { faqData[0].para }
          </p>
        </div>

        <FAQdetails details={ sliceFaqData } />
      </section>
    </>
  )
}

export default FAQ
