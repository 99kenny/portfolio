import React from 'react'

import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from '/public/home-animation.json'

export default function Animnation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 350, height: 350 }}
    />
  )
}