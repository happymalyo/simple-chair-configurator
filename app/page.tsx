"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Model } from "./components/ChairModel";
import { OrbitControls } from "@react-three/drei";
import Loader from "./components/Loader";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id="canvas-container" style={{ width: "90vw", height: "100vh" }}>
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight
            castShadow
            position={[2.5, 5, 5]}
            intensity={1.5}
            shadow-mapSize={[1024, 1024]}
          />
          <Suspense fallback={<Loader />}>
            <Model />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <axesHelper
            scale={2}
            position={[0, 0, 0]}
            onUpdate={(self) => self.setColors("#ff2080", "#20ff80", "#2080ff")}
          />
        </Canvas>
      </div>
    </main>
  );
}
