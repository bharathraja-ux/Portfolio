import { Float, Line, OrbitControls, Sparkles } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'

function Core() {
  const mesh = useRef<THREE.Mesh>(null)
  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.12
      mesh.current.rotation.y += delta * 0.22
    }
  })

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.45, 1]} />
        <meshStandardMaterial color="#0e7490" emissive="#0b6078" emissiveIntensity={0.5} metalness={0.85} roughness={0.2} wireframe />
      </mesh>
      <mesh scale={0.68}>
        <icosahedronGeometry args={[1.45, 1]} />
        <meshStandardMaterial color="#10263b" emissive="#2563eb" emissiveIntensity={0.35} metalness={0.8} roughness={0.25} />
      </mesh>
    </Float>
  )
}

function Node({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={1.7} rotationIntensity={0.1} floatIntensity={0.7}>
      <mesh position={position}>
        <sphereGeometry args={[0.16, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.5} />
      </mesh>
    </Float>
  )
}

function SceneContent() {
  const points: [number, number, number][] = [[-2.4, 1.15, 0], [2.1, 1.3, -0.2], [-2.2, -1.25, 0.15], [2.35, -1.1, 0]]
  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[3, 2, 4]} color="#3b82f6" intensity={8} distance={8} />
      <pointLight position={[-3, -2, 3]} color="#10b981" intensity={5} distance={7} />
      <Core />
      {points.map((position, index) => <Node key={position.join('-')} position={position} color={index % 2 ? '#10b981' : '#3b82f6'} />)}
      <Line points={points.slice(0, 2)} color="#3b82f6" transparent opacity={0.6} lineWidth={1} />
      <Line points={points.slice(2)} color="#10b981" transparent opacity={0.6} lineWidth={1} />
      <Line points={[points[0], [0, 0, 0], points[2]]} color="#2563eb" transparent opacity={0.4} lineWidth={0.7} />
      <Line points={[points[1], [0, 0, 0], points[3]]} color="#059669" transparent opacity={0.4} lineWidth={0.7} />
      <Sparkles count={45} scale={7} size={1.5} speed={0.25} color="#60a5fa" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.45} maxPolarAngle={Math.PI / 1.7} minPolarAngle={Math.PI / 2.8} />
    </>
  )
}

export default function HeroScene() {
  return (
    <div className="scene-canvas" aria-label="Interactive engineering network visualization" role="img">
      <Canvas camera={{ position: [0, 0, 6], fov: 38 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
      <span className="scene-label scene-label-top">SYS / CORE NODE</span>
      <span className="scene-label scene-label-bottom">LIVE TOPOLOGY · 03</span>
    </div>
  )
}
