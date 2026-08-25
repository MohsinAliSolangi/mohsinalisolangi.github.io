import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeBackground({ className }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const parent = canvas.parentElement
    if (!canvas || !parent) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, parent.clientWidth / parent.clientHeight, 0.1, 100)
    camera.position.z = 6.5

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Blockchain-style node network: icosahedron wireframe + glowing vertex points
    const icosGeo = new THREE.IcosahedronGeometry(2.3, 2)
    const wireGeo = new THREE.WireframeGeometry(icosGeo)
    const wireMat = new THREE.LineBasicMaterial({ color: 0xff4800, transparent: true, opacity: 0.28 })
    const wireframe = new THREE.LineSegments(wireGeo, wireMat)
    scene.add(wireframe)

    const nodeMat = new THREE.PointsMaterial({
      color: 0xff4800,
      size: 0.06,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const nodes = new THREE.Points(icosGeo, nodeMat)
    scene.add(nodes)

    // A second, inner rotating shell for depth
    const innerGeo = new THREE.IcosahedronGeometry(1.3, 1)
    const innerWire = new THREE.LineSegments(
      new THREE.WireframeGeometry(innerGeo),
      new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.08 })
    )
    scene.add(innerWire)

    // AI data-particle starfield
    const starCount = 700
    const starGeo = new THREE.BufferGeometry()
    const positions = new Float32Array(starCount * 3)
    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 22
      positions[i * 3 + 1] = (Math.random() - 0.5) * 22
      positions[i * 3 + 2] = (Math.random() - 0.5) * 22
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const starMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.018,
      transparent: true,
      opacity: 0.45,
      sizeAttenuation: true,
    })
    const stars = new THREE.Points(starGeo, starMat)
    scene.add(stars)

    let mouseX = 0
    let mouseY = 0
    const onMouseMove = (e) => {
      mouseX = e.clientX / window.innerWidth - 0.5
      mouseY = e.clientY / window.innerHeight - 0.5
    }
    window.addEventListener('mousemove', onMouseMove)

    const resize = () => {
      const w = parent.clientWidth
      const h = parent.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    resize()
    window.addEventListener('resize', resize)

    let rafId
    const animate = () => {
      wireframe.rotation.y += 0.0016
      wireframe.rotation.x += 0.0006
      nodes.rotation.copy(wireframe.rotation)
      innerWire.rotation.y -= 0.0011
      innerWire.rotation.x += 0.0009
      stars.rotation.y += 0.0002

      camera.position.x += (mouseX * 1.4 - camera.position.x) * 0.03
      camera.position.y += (-mouseY * 1.4 - camera.position.y) * 0.03
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
      rafId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', resize)
      icosGeo.dispose()
      wireGeo.dispose()
      wireMat.dispose()
      nodeMat.dispose()
      innerGeo.dispose()
      innerWire.geometry.dispose()
      innerWire.material.dispose()
      starGeo.dispose()
      starMat.dispose()
      renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className={className} />
}
