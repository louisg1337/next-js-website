import { useState, useRef, Suspense } from "react"; 
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

const Star = () => {
    const starRef = useRef();
    const sphere = random.inSphere(new Float32Array(3000, {radius: 1.2}))

    useFrame((state, delta) => {
        starRef.current.rotation.x -= delta / 100;
        starRef.current.rotation.y -= delta / 100;
    })

    return (
        <group rotation={[0,0, Math.PI / 4]}>
            <Points ref={starRef} positions={sphere} stride={3} frustumCulled>
                <PointMaterial transparent color="white" size={0.002} sizeAttenuation={true} depthWrite={false} />
            </Points>
        </group>
    )
}


export default function Stars() {

    return (
        <Canvas camera={{ position: [0, 0, 1]}}>
            <Suspense fallback={null}>
                <Star />
            </Suspense>

            <Preload all />
        </Canvas>
    )
}