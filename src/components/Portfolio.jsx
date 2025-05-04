import React from 'react'
import musicPlayer from '../assets/music_player.jpg'
const Portfolio = () => {
  const projectsArr = [
    {
      id: 1,
      src: musicPlayer,
      name: 'Music Player',
      description: 'A music player web app built using Javscript, HTML, CSS.',
      demo: 'https://audiotrove.netlify.app/',
      code: 'https://github.com/Vidyadarekar1500/MusicPlayerApp'
    },
  ]
  return (
    <div name='portfolio' className='w-full md:h-screen bg-gradient-to-b from-black to-gray-800 text-white p-4'>
      <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {projectsArr.map(({ id, src, demo, code, name }) => {
            return (
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <b className='p-2 flex items-center justify-center hover:scale-105'>{name}</b>
                <img src={src} alt="musicPlayer" className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                  <a href={demo} target='_blank' rel='noreferrer' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                  <a href={code} target='_blank' rel='noreferrer' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                </div>
              </div>
            )

          })}
          
        </div>
      </div>
    </div>
  )
}

export default Portfolio