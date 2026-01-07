import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import Background from '../background/Background'

export default function CanvasRoot() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
      <ScrollControls pages={4}>
        <Background />
      </ScrollControls>
    </Canvas>
  )
}