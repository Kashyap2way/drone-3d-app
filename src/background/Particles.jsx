import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Particles({ scrollDepth = 160 }) {
  const points = useRef()

  // Generate particle positions across full depth
  const particlesPositions = useMemo(() => {
    const arr = new Float32Array(15000 * 3) // 15000 points
    for (let i = 0; i < 15000; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 40      // x
      arr[i * 3 + 1] = (Math.random() - 0.5) * 40      // y
      arr[i * 3 + 2] = -Math.random() * scrollDepth    // z spread across scroll
    }
    return arr
  }, [scrollDepth])

  // Random glow logic
  const glowTimes = useMemo(() => {
    const times = []
    for (let i = 0; i < 15000; i++) {
      if (Math.random() < 0.3) { // 30% glow chance
        times.push(Math.random() * 3 + 1) // glow duration 1–4 sec
      } else {
        times.push(0)
      }
    }
    return times
  }, [])

  const mat = useRef()

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    // slow rotation
    points.current.rotation.y = time * 0.025

    // Update glow opacity per particle
    const attr = points.current.geometry.attributes.color
    for (let i = 0; i < attr.count; i++) {
      const glow = glowTimes[i]
      if (glow > 0) {
        attr.array[i * 3 + 0] = 0.8 + 0.2 * Math.sin(time * Math.PI / glow)
        attr.array[i * 3 + 1] = 0.8 + 0.2 * Math.sin(time * Math.PI / glow)
        attr.array[i * 3 + 2] = 1.0
      }
    }
    attr.needsUpdate = true
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={15000}
          array={particlesPositions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={15000}
          array={new Float32Array(15000 * 3).fill(1)} // initial white
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={mat}
        vertexColors
        size={0.008}
        transparent
        opacity={0.7}
      />
    </points>
  )
}