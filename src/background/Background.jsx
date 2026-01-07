import { Suspense } from 'react'
import Particles from './Particles'
import GradientFog from './GradientFog'
import ScrollScene from './ScrollScene'

export default function Background() {
  return (
    <Suspense fallback={null}>
      <color attach="background" args={['#05010a']} />
      <GradientFog />
      <Particles />
      <ScrollScene />
    </Suspense>
  )
}
