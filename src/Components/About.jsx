import React from 'react'

function About() {
  return (
    <div name ="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
                <p className='text-xl mt-20'>
                     Hello! I'm Anteneh Kindu, a seasoned full-stack web developer with a passion for AI development and machine learning. At 31 years old, I bring a wealth of experience and expertise to my work. I honed my skills in full-stack development through intensive training at Evangadi Bootcamps, and since then, I have successfully completed numerous full-stack projects.
                </p>
                <br/>
                <p className='text-xl'>
                    To achieve my objectives, I approach challenges with an outgoing and tactful demeanor. I understand the importance of effective communication and actively listen to others when problem-solving. By leveraging these skills, I consistently deliver high-quality solutions and foster collaborative relationships.
                </p>
        </div>
    </div>
  )
}

export default About