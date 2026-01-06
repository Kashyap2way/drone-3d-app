import { Canvas } from '@react-three/fiber'
import Background from '../background/Background'

export default function CanvasRoot() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
      <Background />
    </Canvas>
  )
}
