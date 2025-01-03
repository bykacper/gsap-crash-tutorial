import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFromTo = () => {
  // TODO: Implement the gsap.fromTo() method
  useGSAP(() => {
    gsap.fromTo('#red-box', { // from
      x: 0,
      rotation: 0,
      borderRadius: "0%"
    },
    { // to 
      x: 250,
      repeat: -1, 
      yoyo: true, // wraz z właściwości repeat tworzy się animacja, kwadrat będzie cofał się do pierwotnego położenia i wykonywał animację od nowa
      borderRadius: '100%',
      rotation: 360, // kwadrat będzie obracał się podczas animacji o 360 stopni
      duration: 2, // czas trwania animacji będzie trwał 2 sekundy
      ease: 'power1.out'
    })
  }, [])

  return (
    <main>
      <h1>GsapFromTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.fromTo()</code> method is used to animate elements from a
        new state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.fromTo()</code> method is similar to the{" "}
        <code>gsap.from()</code> and <code>gsap.to()</code> methods, but the
        difference is that the <code>gsap.fromTo()</code> method animates
        elements from a new state to a new state, while the{" "}
        <code>gsap.from()</code> method animates elements from a new state to
        their current state, and the <code>gsap.to()</code> method animates
        elements from their current state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.fromTo()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.fromTo()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFromTo;
