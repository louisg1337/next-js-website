import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function Planet() {
    return (
        <Canvas orthographic={true}>

            <ambientLight intensity={0.3} color="#B8A8BA" />

            <mesh position={[0,0,0]}>
                <boxGeometry args={[2,2,2]} />
                <meshStandardMaterial />
                <OrbitControls enableZoom={false} />
            </mesh>


        </Canvas>
    )
}