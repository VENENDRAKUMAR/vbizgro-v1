import React from 'react'

const Video = () => {
  return (
    <div className='h-screen  w-screen flex justify-center items-center bg-black overflow-hidden object-cover'>
<video src="https://design239.vercel.app/assets/mainvid.mp4" autoPlay muted></video>


    </div>
  )
}

export default Video