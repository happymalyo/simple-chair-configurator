"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
function Box(props) {
  const ref = useRef();
  const [clicked, click] = useState(false);
  const [hovered, hover] = useState(false);
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
  });
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id="canvas-container">
        <Canvas>
          <ambientLight intensity={0.1} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />
          <Box position={[-1.2, 0, 0]} />
        </Canvas>
      </div>
    </main>
  );
}
