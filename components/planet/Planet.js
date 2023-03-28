import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'

const Planet = () => {
    return (
        <mesh position={[0,0,0]} rotateX={10}>
            <spotLight color={0xFFFFFF} position={[10,5,5]}/>
            <sphereGeometry />
            <meshStandardMaterial color={"#B8A8BA"}/>
        </mesh>
    )
}

export default function PlanetCanvas() {

    return (
        <Canvas camera={{fov: 40, near: 0.9, far: 50,}}>
            <Suspense fallback={null}> 
                <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}  />
                <Planet />
            </Suspense>

            <Preload />
        </Canvas>
    )
}