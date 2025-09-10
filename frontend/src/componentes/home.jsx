"use client"

import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import "../styles/home.css"

const config = {
  theme: "system",
  animate: true,
  snap: false,
  start: 220,
  end: 260,
  scroll: true,
  debug: false,
}

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const items = gsap.utils.toArray("ul li")
    let scrollerScrub
    let dimmerScrub
    let chromaEntry
    let chromaExit

    const update = () => {
      document.documentElement.dataset.theme = config.theme
      document.documentElement.dataset.syncScrollbar = config.scroll
      document.documentElement.dataset.animate = config.animate
      document.documentElement.dataset.snap = config.snap
      document.documentElement.dataset.debug = config.debug
      document.documentElement.style.setProperty("--start", config.start)
      document.documentElement.style.setProperty("--hue", config.start)
      document.documentElement.style.setProperty("--end", config.end)

      if (!config.animate) {
        chromaEntry?.scrollTrigger?.disable(true, false)
        chromaExit?.scrollTrigger?.disable(true, false)
        dimmerScrub?.disable(true, false)
        scrollerScrub?.disable(true, false)
        gsap.set(items, { opacity: 1 })
        gsap.set(document.documentElement, { "--chroma": 0 })
      } else {
        gsap.set(items, { opacity: (i) => (i !== 0 ? 0.2 : 1) })
        dimmerScrub?.enable(true, true)
        scrollerScrub?.enable(true, true)
        chromaEntry?.scrollTrigger?.enable(true, true)
        chromaExit?.scrollTrigger?.enable(true, true)
      }
    }

    // Ajusta a opacidade inicial
    gsap.set(items, { opacity: (i) => (i !== 0 ? 0.2 : 1) })

    // Timeline para fade in/out conforme scroll
    const dimmer = gsap
      .timeline()
      .to(items.slice(1), {
        opacity: 1,
        stagger: 0.5,
      })
      .to(
        items.slice(0, items.length - 1),
        {
          opacity: 0.2,
          stagger: 0.5,
        },
        0,
      )

    dimmerScrub = ScrollTrigger.create({
      trigger: items[0],
      endTrigger: items[items.length - 1],
      start: "center center",
      end: "center center",
      animation: dimmer,
      scrub: 0.2,
    })

    // Timeline para o hue (gradiente)
    const scroller = gsap
      .timeline()
      .fromTo(document.documentElement, { "--hue": config.start }, { "--hue": config.end, ease: "none" })

    scrollerScrub = ScrollTrigger.create({
      trigger: items[0],
      endTrigger: items[items.length - 1],
      start: "center center",
      end: "center center",
      animation: scroller,
      scrub: 0.2,
    })

    chromaEntry = gsap.fromTo(
      document.documentElement,
      { "--chroma": 0 },
      {
        "--chroma": 0.3,
        ease: "none",
        scrollTrigger: {
          scrub: 0.2,
          trigger: items[0],
          start: "center center+=40",
          end: "center center",
        },
      },
    )

    chromaExit = gsap.fromTo(
      document.documentElement,
      { "--chroma": 0.3 },
      {
        "--chroma": 0,
        ease: "none",
        scrollTrigger: {
          scrub: 0.2,
          trigger: items[items.length - 2],
          start: "center center",
          end: "center center-=40",
        },
      },
    )

    update()

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div>
      <header>
        <img src="/image/gradientiiir.png" alt="imagem topo" className="fixed-image" />
        <div className="title-top">
          <h1>Bem-vindo</h1>
        </div>
        <div className="text-center">
          <p>No meio de circuitos e máquinas a humanidade se perdeu.</p>
          <p>
            Esse é um convite para reconectar-se com sua <span className="highlight">alma</span>.
          </p>
        </div>
      </header>

      <main>
        <section className="content fluid">
          <h2>
            <span aria-hidden="true">Sinta sua&nbsp;</span>
            <span className="sr-only">you can ship things.</span>
          </h2>
          <ul aria-hidden="true" style={{ "--count": 22 }}>
            <li style={{ "--i": 0 }}>verdade.</li>
            <li style={{ "--i": 1 }}>saudade.</li>
            <li style={{ "--i": 2 }}>felicidade.</li>
            <li style={{ "--i": 3 }}>criatividade.</li>
            <li style={{ "--i": 4 }}>lealdade.</li>
            <li style={{ "--i": 5 }}>bondade.</li>
            <li style={{ "--i": 6 }}>inteligência.</li>
            <li style={{ "--i": 7 }}>alegria.</li>
            <li style={{ "--i": 8 }}>nostalgia.</li>
            <li style={{ "--i": 9 }}>amizade.</li>
            <li style={{ "--i": 10 }}>família.</li>
            <li style={{ "--i": 11 }}>ignorência.</li>
            <li style={{ "--i": 12 }}>tristeza.</li>
            <li style={{ "--i": 13 }}>raiva.</li>
            <li style={{ "--i": 14 }}>risada.</li>
            <li style={{ "--i": 15 }}>sensibilidade.</li>
            <li style={{ "--i": 16 }}>infância.</li>
            <li style={{ "--i": 17 }}>memória.</li>
            <li style={{ "--i": 18 }}>história.</li>
            <li style={{ "--i": 19 }}>vida.</li>
            <li style={{ "--i": 20 }}>humanidade.</li>
            <li style={{ "--i": 21 }}>alma.</li>
          </ul>
        </section>

        <section className="arcos-section">
          <h3>você passará por 4 arcos</h3>
          <div className="arcos">
            <div className="arco" data-hover="arte e cultura">
              <img src="/image/esfera1.png" className="esfera esfera1" />
              <span>1.</span>
            </div>
            <div className="arco" data-hover="emoções">
              <img src="/image/esfera2.png" className="esfera esfera2" />
              <span>2.</span>
            </div>
            <div className="arco" data-hover="inovação">
              <img src="/image/esfera3.png" className="esfera esfera3" />
              <span>3.</span>
            </div>
            <div className="arco" data-hover="resiliência">
              <img src="/image/esfera4.png" className="esfera esfera4" />
              <span>4.</span>
            </div>
          </div>

          <div className="align-btn">
            <button className="floating-btn">→</button>
          </div>
        </section>
      </main>
    </div>
  )
}
