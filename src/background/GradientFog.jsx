import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export default function GradientFog() {
  const color = useRef(new THREE.Color('#05010a'))
  useFrame(({ scene, clock }) => {
    const t = clock.elapsedTime * 0.2
    const r = 0.03 * Math.sin(t) + 0.05
    const g = 0.02 * Math.sin(t + 2) + 0.03
    const b = 0.05 * Math.sin(t + 4) + 0.06
    color.current.setRGB(r, g, b)
    scene.background = color.current
  })
  return <fog attach="fog" args={['#05010a', 5, 25]} />
}
