import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Particles() {
  const points = useRef()

  useFrame(({ clock }) => {
    points.current.rotation.y = clock.elapsedTime * 0.05
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={3000}
          array={new Float32Array(
            Array.from({ length: 9000 }, () => (Math.random() - 0.5) * 20)
          )}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.02}
        color="#6a5acd"
        transparent
        opacity={0.8}
      />
    </points>
  )
}
