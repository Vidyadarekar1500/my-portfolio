import React from 'react';

const timelineData = [
  {
    title: 'Frontend Developer',
    company: 'Tata Consultancy Services',
    date:'July-2021 - present ',
    points: [
        'Developed and styles UI components using ReactJS.',
        'Created a design system library with Storybook.',
        'Worked with different teams in 2-week agile sprints.',
        'Developed and integrated MFE and BFF components.',
        'Worked on different projects using ReactJS, Redux, and JavaScript, Typescript, Material UI, and Sass, storybook.',
        'Contributed to refactor the UI code periodically as per coding standards which reduced future development efforts,improved code readability and overall team productivity.'
    ]
  },
];

const Timeline = () => {
    return (
      <div name="experience" className="relative bg-gradient-to-b from-black to-gray-800 py-16 px-4 text-white p-4 w-full md:h-screen">
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
        </div>
        <div className="max-w-6xl mx-auto relative">
          {/* Center vertical line */}
          <div className="hidden md:block absolute md:left-1/2 transform -translate-x-1/2 h-full border-l-2 border-cyan-400" />
  
          {timelineData.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            console.log("isLeft", isLeft, "idx", item.title)
  
            return (
              <div key={idx} className="mb-16 flex flex-col md:flex-row items-center relative">
                {/* Content */}
                <div
                  className={`w-full md:w-5/12 p-4 bg-slate-800 rounded-lg shadow-md z-10 ${
                    isLeft ? 'md:pr-5 md:ml-[54%]' : 'md:pl-5 md:mr-[54%]'
                  }`}
                >
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-cyan-400 font-semibold">{item.company}</p>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1 text-slate-300">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <p className={`mt-2 text-sm text-slate-400 italic ${
                    isLeft ? 'md:text-right' : ''
                  }`}>{item.date}</p>
                </div>
  
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-cyan-400 border-4 border-slate-900 rounded-full z-20" />
              </div>
            );
          })}
        </div>
        </div>
      </div>
    );
  };
  
  export default Timeline;