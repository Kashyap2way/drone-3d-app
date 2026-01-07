import { Suspense } from 'react'
import Particles from './Particles'
import ScrollScene from './ScrollScene'
import WaveBackground from './WaveBackground'

export default function Background() {
  return (
    <Suspense fallback={null}>
      <WaveBackground />
      <Particles />
      <ScrollScene />
    </Suspense>
  )
}