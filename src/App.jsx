// in App.jsx
import CanvasRoot from './core/CanvasRoot'
import { ScrollControls } from '@react-three/drei'

export default function App() {
  return (
    <CanvasRoot>
      <ScrollControls pages={4}>
        {/* content handled inside ScrollScene */}
      </ScrollControls>
    </CanvasRoot>
  )
}
