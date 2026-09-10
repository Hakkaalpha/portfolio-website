import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Icosahedron, Float } from '@react-three/drei'
import * as THREE from 'three'

function WireframeGeo() {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001
      meshRef.current.rotation.y += 0.002
      meshRef.current.rotation.z += 0.0005
    }
  })

  return (
    <Float speed={0.6} rotationIntensity={0.2} floatIntensity={0.3}>
      <Icosahedron ref={meshRef} args={[2.5, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#60a5fa"
          wireframe
          transparent
          opacity={0.15}
          emissive="#2563eb"
          emissiveIntensity={0.3}
        />
      </Icosahedron>
    </Float>
  )
}

function Particles({ count = 120 }) {
  const pointsRef = useRef()

  const { geometry, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const spds = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
      spds[i] = 0.002 + Math.random() * 0.008
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return { geometry: geo, speeds: spds }
  }, [count])

  useFrame(() => {
    if (!pointsRef.current) return
    const posAttr = pointsRef.current.geometry.attributes.position
    const arr = posAttr.array
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += speeds[i]
      if (arr[i * 3 + 1] > 10) {
        arr[i * 3 + 1] = -10
        arr[i * 3] = (Math.random() - 0.5) * 20
        arr[i * 3 + 2] = (Math.random() - 0.5) * 20
      }
    }
    posAttr.needsUpdate = true
  })

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.03}
        color="#60a5fa"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export default function HeroCanvas() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0)
        }}
      >
        <ambientLight intensity={0.3} color="#ffffff" />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.8}
          color="#2563eb"
        />
        <directionalLight
          position={[-3, -3, 2]}
          intensity={0.3}
          color="#60a5fa"
        />
        <WireframeGeo />
        <Particles count={120} />
      </Canvas>
    </div>
  )
}
