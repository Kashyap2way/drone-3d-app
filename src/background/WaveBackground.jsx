import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = /* glsl */`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = /* glsl */`
  uniform float uTime;
  varying vec2 vUv;

  vec3 blendColors(vec3 a, vec3 b, float t) {
    return mix(a, b, t);
  }

  void main() {
    float wave1 = sin(vUv.x * 4.0 + uTime * 0.25) * 0.5 + 0.5;
    float wave2 = cos(vUv.y * 3.0 - uTime * 0.25) * 0.5 + 0.5;
    float waveMix = smoothstep(0.0, 1.0, wave1 * wave2);

    // deeper violet & balanced blue-magenta tones
    vec3 colorA = vec3(0.02, 0.0, 0.07);  // very dark violet base
    vec3 colorB = vec3(0.0, 0.02, 0.18);  // deep space blue
    vec3 colorC = vec3(0.2, 0.0, 0.25);   // richer magenta highlight

    vec3 blend1 = blendColors(colorA, colorB, wave1);
    vec3 blend2 = blendColors(colorB, colorC, wave2);
    vec3 finalColor = blendColors(blend1, blend2, waveMix);

    gl_FragColor = vec4(finalColor, 1.0);
  }
`

export default function WaveBackground() {
  const mesh = useRef()
  const uniforms = useRef({
    uTime: { value: 0 },
  })

  useFrame((state, delta) => {
    uniforms.current.uTime.value += delta
  })

  return (
    <mesh ref={mesh} position={[0, 0, -50]}>
    <planeGeometry args={[200, 400]} />   // much larger background area
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms.current}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}
