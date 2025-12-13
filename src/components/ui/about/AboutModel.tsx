import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF, Bounds } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Model() {
  const ref = useRef<THREE.Group>(null!);
  const { scene } = useGLTF("/portfolio-app/models/retro_computer.glb");

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime();

    ref.current.position.y = Math.sin(t) * 0.08;
    ref.current.rotation.y = -Math.PI / 6 + mouse.x * 0.25;
    ref.current.rotation.x = 0.15 + mouse.y * 0.12;
  });

  return <primitive ref={ref} object={scene} />;
}

export default function AboutModel3D() {
  return (
    <Canvas
      camera={{
        position: [0, 1.5, 4],
        fov: 45,
        near: 0.1,
        far: 100,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Suspense fallback={null}>
        <Bounds fit observe margin={1}>
          <Model />
        </Bounds>
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
