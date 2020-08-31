import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
const earthImg = 'https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/7fRQ-earth.jpg';
const moonImg = 'https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/GNH7-moon.png';

export default function Planets() {
    const ref = useRef()
    const [texture, moon] = useLoader(THREE.TextureLoader, [earthImg, moonImg])
    return (
        <group ref={ref} scale={[100, 100, 100]} position={[-500, -500, 1000]}>
            <mesh>
                <sphereBufferGeometry attach="geometry" args={[5, 32, 32]} />
                <meshStandardMaterial attach="material" map={texture} roughness={1} fog={false} />
            </mesh>
            <mesh position={[5, -5, -5]}>
                <sphereBufferGeometry attach="geometry" args={[0.75, 32, 32]} />
                <meshStandardMaterial attach="material" roughness={1} map={moon} fog={false} />
            </mesh>
            <pointLight position={[-5, -5, -5]} distance={1000} intensity={6} />
            <mesh position={[-30, -10, -60]}>
                <sphereBufferGeometry attach="geometry" args={[4, 32, 32]} />
                <meshBasicMaterial attach="material" color="#FFFF99" fog={false} />
                <pointLight distance={6100} intensity={50} color="white" />
            </mesh>
        </group>
    )
}
