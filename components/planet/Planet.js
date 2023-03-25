import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function Planet() {
    return (
        <Canvas>
            <Suspense fallback={null}>
            <ambientLight intensity={0.3} color="white" />
                <mesh position={[0,0,0]}>
                    <boxGeometry args={[2,2,2]} />
                    <meshStandardMaterial color={0x00ff00}/>
                    <OrbitControls enableZoom={false} />
                </mesh>
            </Suspense>
        </Canvas>
    )
}