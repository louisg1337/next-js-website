import { useState, useRef, Suspense } from "react"; 
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

export default function Stars() {
    return (
        <Canvas camera={{ position: [0, 0, 1]}}>
            <Suspense fallback={null}>
                <group>
                    
                </group>
            </Suspense>

            <Preload all />
        </Canvas>
    )
}