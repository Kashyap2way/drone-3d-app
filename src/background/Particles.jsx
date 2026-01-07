import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Particles() {
  const points = useRef()

  useFrame(({ clock }) => {
    points.current.rotation.y = clock.elapsedTime * 0.025 // half speed
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={15000}
          array={new Float32Array(
            Array.from({ length: 45000 }, () => (Math.random() - 0.5) * 40)
          )}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.008} color="#a7b3ff" transparent opacity={0.7} />
    </points>
  )
}
