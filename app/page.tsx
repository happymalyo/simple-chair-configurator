"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Model } from "./components/ChairModel";
import { OrbitControls, useGLTF, useTexture, Decal } from "@react-three/drei";
import Loader from "./components/Loader";
import Image from "next/image";
import * as THREE from 'three'; 

export default function Home() {
  const [texture, setTexture] = useState("MK_Wood_02.jpg");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 z-20">
      <div id="canvas-container" style={{ width: "90vw", height: "100vh" }}>
        <Canvas style={{ background: "#d3d3d3" }}>
          <ambientLight intensity={0.5} />
          <directionalLight
            castShadow
            position={[2.5, 5, 5]}
            intensity={1.5}
            shadow-mapSize={[1024, 1024]}
          />
          <Suspense fallback={<Loader />}>
            <Model texture={texture} />
          </Suspense>
          <Cup />
          <OrbitControls
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
        <div
          className="flex flex-col bg-dark textures-conf text-white z-40 space-y-2 p-1"
          style={{
            position: "absolute",
            bottom: "120px",
            background: "#000",
          }}
        >
          <button
            className="btn"
            onClick={() => setTexture("SALFORD_SABBIA_NORMAL.png")}
          >
            <Image
              alt="Salford"
              width={20}
              height={10}
              src={"/maps/SALFORD_SABBIA_NORMAL.png"}
            />
          </button>
          <button className="btn" onClick={() => setTexture("MK_Wood_02.jpg")}>
            <Image
              alt="Mk wood"
              width={20}
              height={10}
              src={"/maps/MK_Wood_02.jpg"}
            />
          </button>
        </div>
      </div>
    </main>
  );
}

function Cup(props) {
  const { nodes, materials } = useGLTF("/models/coffee-transformed.glb");
  const texture = useTexture("/maps/pngaaa.com-257342.png");
  materials["13 - Default"].side = THREE.FrontSide;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coffee_cup_top_16oz.geometry}
        material={materials["13 - Default"]}
        position={[-0.2, 0.6, 0]}
        rotation={[0, 0, Math.PI / 4]}
      >
        <Decal
          position={[0, 0.75, 0.3]}
          rotation={[0, 0, 0]}
          scale={[0.52, 0.6, 0.6]}
          map={texture}
          depthTest={true} // Ensure depth test is enabled
        />
      </mesh>
    </group>
  );
}
