'use client';

import { useState } from 'react';
import { motion} from 'framer-motion';
import AiCard from './AiCard';

const tabs = [
  { id: 'market', label: 'Market Prediction', content: 'Use AI insights for smarter business decisions and stay competitive.',image:'/AIPICS/marketing slideimg.jpeg' },
   { id: 'finance', label: 'Finance', content: 'Our AI models analyze data for better investment decisions.',image:'/AIPICS/finance slideimg.jpeg' },
  { id: 'analytics', label: 'Analytics', content: 'Optimize your business strategy with AI-powered analytics.',image:'/AIPICS/data slideimg.jpeg' },
  { id: 'content', label: 'Content Generation', content: 'Generate high-quality content effortlessly with AI.',image:'/AIPICS/content slide.jpeg' },
  { id: 'support', label: 'Customer Support', content: 'Use AI chatbots for instant, personalized customer support.',image:'/AIPICS/customer.jpeg' }
];

export default function Slider() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [offset, setOffset] = useState(0);


  const handleTabClick = (id:string, index:number) => {
    setActiveTab(id);
    setOffset(-index * 100); 
  };
  

  return (
    <div className="min-w-full max-w-4xl flex items-center flex-col  py-10 font-['Figtree']  ">
      <div className="flex flex-wrap w-fit justify-center mb-6 border-2 border-[#E4E4E7] rounded-lg">
        {tabs.map((tab,i) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id,i)}
            className={`px-4 py-2 font-semibold text-base transition-all ${activeTab === tab.id ? 'bg-[#03217F] text-[#ffffff]  rounded-lg' : ' text-[#AAAAAA]'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="flex   items-center justify-center overflow-hidden w-screen  ">
        <div className="flex gap-6 md:w-full w-[100%] -mx-7 md:m-0  scrollbar-hide px-6">
          {tabs.map((tab) => (
            <motion.div
              key={tab.id}
              animate={{ y: activeTab === tab.id ? -50 : 0, opacity: activeTab === tab.id ? 1 : 0.6,x:`${offset}%`}}
              transition={{
                type: "tween",
                stiffness:30,
                ease: "easeInOut",
                duration:1,
                y: { delay: 0.5 }, 
                opacity: { delay: 0 }, 
                x: { delay: 0 } 
              }}
              className="pb-5 pt-32"
            >
              <AiCard label={tab.label} content={tab.content} image={tab.image}/>
            </motion.div>
          ))}
        </div>
    </div>
    </div>
  );
}
