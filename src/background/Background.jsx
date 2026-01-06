import { Suspense } from 'react'
import Particles from './Particles'
import GradientFog from './GradientFog'

export default function Background() {
  return (
    <Suspense fallback={null}>
      <color attach="background" args={['#000']} />
      <Particles />
      <GradientFog />
    </Suspense>
  )
}
