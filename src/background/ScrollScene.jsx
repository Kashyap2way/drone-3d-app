import { useFrame, useThree } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { useRef } from 'react'

export default function ScrollScene() {
  const { camera } = useThree()
  const scroll = useScroll()
  const targetZ = useRef(0)

  useFrame(() => {
    // smooth scroll transition
    targetZ.current = -scroll.offset * 40 // move camera over long scroll
    camera.position.z += (targetZ.current - camera.position.z) * 0.05
  })
  return null
}
