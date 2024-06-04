"use client";
import { Canvas, useFrame } from "@react-three/fiber";
function Box(props) {
  useFrame(() => {
    console.log("infinity loop");
  });
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial />
    </mesh>
  );
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id="canvas-container">
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <Box position={[-1.2, 0, 0]} />
        </Canvas>
      </div>
    </main>
  );
}
