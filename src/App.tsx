/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Mail, MessageCircle, ArrowUpRight, Play, ExternalLink, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="top" className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] font-sans selection:bg-[#F27D26] selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled ? "bg-black/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col z-50 relative"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#F27D26] font-bold">hitster Ai presenta</span>
            <span className="text-xl font-medium tracking-tight">Miguel De Hoyos</span>
          </motion.div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-widest font-semibold text-white/60">
            <a href="#about" className="hover:text-[#F27D26] transition-colors">Perfil</a>
            <a href="#approach" className="hover:text-[#F27D26] transition-colors">Enfoque</a>
            <a href="#reel" className="hover:text-[#F27D26] transition-colors">Obra</a>
            <a href="#contact" className="hover:text-[#F27D26] transition-colors">Contacto</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white z-50 relative p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 md:hidden shadow-2xl"
            >
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-semibold text-white/80 hover:text-[#F27D26] transition-colors">Perfil</a>
              <a href="#approach" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-semibold text-white/80 hover:text-[#F27D26] transition-colors">Enfoque</a>
              <a href="#reel" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-semibold text-white/80 hover:text-[#F27D26] transition-colors">Obra</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-semibold text-white/80 hover:text-[#F27D26] transition-colors">Contacto</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col justify-center items-center px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <iframe
            src="https://player.vimeo.com/video/1181113708?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&quality=1080p"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77777778vh] min-w-full min-h-full"
            style={{ pointerEvents: 'none' }}
            allow="autoplay; fullscreen"
          />
        </div>

        <div className="relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-medium tracking-tighter mb-6 leading-[0.9]">
              Miguel De Hoyos
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/70 max-w-2xl mx-auto leading-relaxed italic text-justify md:text-center">
              "En la intersección de la estructura y la emoción."
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 to-[#F27D26]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Explorar</span>
        </motion.div>
      </header>

      {/* Perfil Section */}
      <section id="about" className="py-24 md:py-40 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#F27D26] font-bold">El Perfil</span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight text-balance">
              Una mirada que nace de una comprensión profunda.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-lg text-white/60 leading-relaxed font-light text-justify"
          >
            <p>
              Con más de quince años de trayectoria en la industria, Miguel De Hoyos es un director de cine mexicano cuyo trabajo se sitúa exactamente en la frontera entre la emoción y la arquitectura visual.
            </p>
            <p>
              Al contar con un sólido historial en VFX, Producción Virtual y postproducción cinematográfica, Miguel no solo dirige la interpretación y la narrativa: diseña flujos de trabajo donde la tecnología se subordina al significado.
            </p>
            <p>
              Su enfoque combina precisión técnica con una sensibilidad que privilegia lo orgánico por encima del espectáculo vacío.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enfoque Section */}
      <section id="approach" className="py-24 md:py-40 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden grayscale brightness-75 hover:grayscale-0 transition-all duration-700 bg-white/5 order-2 md:order-1"
            >
              <div className="absolute inset-0 bg-black/20 z-10" />
              <iframe
                src="https://player.vimeo.com/video/1166172012?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&quality=1080p"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77777778vh] min-w-full min-h-full"
                style={{ pointerEvents: 'none' }}
                allow="autoplay; fullscreen"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10 order-1 md:order-2"
            >
              <div className="space-y-4 text-center">
                <span className="text-[11px] uppercase tracking-[0.4em] text-[#F27D26] font-bold tracking-widest">IA + Realismo</span>
                <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-balance">Innovación para marcas.</h2>
              </div>
              
              <div className="space-y-6 text-lg text-white/70 font-light text-justify">
                <p>
                  Miguel diseña e implementa flujos de trabajo híbridos —Live Action combinado con IA— o producciones íntegramente generadas con Inteligencia Artificial para resolver las necesidades más exigentes de sus clientes.
                </p>
                <p>
                  Su verdadera ventaja competitiva radica en la postproducción: Miguel no entrega simples "imágenes de IA", sino piezas cinematográficas acabadas.
                </p>
                <p className="border-l-2 border-[#F27D26] pl-6 italic text-xl text-white/90 py-2">
                  "Dota al material sintético de imperfecciones de lente óptico, texturas orgánicas e iluminación físicamente correcta."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reel Section */}
      <section id="reel" className="py-24 md:py-40 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="flex flex-col items-center text-center gap-6 border-b border-white/10 pb-12">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.4em] text-[#F27D26] font-bold">Showreel</span>
              <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-balance">Obra Seleccionada.</h2>
            </div>
            <p className="text-white/40 text-sm tracking-widest uppercase mb-1">Portafolio 2026</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Video Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group space-y-6"
            >
              <div className="relative aspect-video bg-white/5 rounded-xl overflow-hidden shadow-2xl">
                <iframe 
                  src="https://player.vimeo.com/video/1181113708?badge=0&autopause=0&player_id=0&app_id=58479" 
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture" 
                  title="Reel I · Commercial Style"
                />
              </div>
              <div className="flex flex-col items-center pt-4 text-center">
                <div className="w-full">
                  <h3 className="text-2xl font-medium tracking-tight group-hover:text-[#F27D26] transition-colors text-balance">Reel I · Commercial Style</h3>
                  <div className="flex justify-center gap-4 mt-3">
                    <span className="text-[10px] uppercase tracking-widest text-white/50 border border-white/20 px-3 py-1 rounded-full font-bold">100% IA</span>
                    <span className="text-[10px] uppercase tracking-widest text-white/50 border border-white/20 px-3 py-1 rounded-full font-bold">2026</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Video Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group space-y-6"
            >
              <div className="relative aspect-video bg-white/5 rounded-xl overflow-hidden shadow-2xl">
                <iframe 
                  src="https://player.vimeo.com/video/1166172012?badge=0&autopause=0&player_id=0&app_id=58479" 
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture" 
                  title="Reel II · General Static"
                />
              </div>
              <div className="flex flex-col items-center pt-4 text-center">
                <div className="w-full">
                  <h3 className="text-2xl font-medium tracking-tight group-hover:text-[#F27D26] transition-colors text-balance">Reel II · General Static</h3>
                  <div className="flex justify-center gap-4 mt-3">
                    <span className="text-[10px] uppercase tracking-widest text-white/50 border border-white/20 px-3 py-1 rounded-full font-bold">100% IA</span>
                    <span className="text-[10px] uppercase tracking-widest text-white/50 border border-white/20 px-3 py-1 rounded-full font-bold">2026</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-40 px-6 border-y border-white/5 bg-black">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-light text-white/80 leading-tight italic"
          >
            "No opera la tecnología. La dirige con intención. Desde la idea inicial hasta el cuadro final, cada historia exige su propia forma — y cada forma, disciplina."
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-40 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <div className="space-y-6 text-center">
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#F27D26] font-bold">Contacto</span>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-balance">Cuéntame sobre tu proyecto.</h2>
            <p className="text-xl text-white/50 font-light max-w-2xl mx-auto text-justify md:text-center">
              Disponible para dirección publicitaria, piezas cinematográficas, workflows híbridos Live Action + IA y producciones íntegramente generativas.
            </p>
          </div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            action="https://formsubmit.co/baez@hitster.page" 
            method="POST" 
            className="flex flex-col gap-6 w-full max-w-xl mx-auto mt-12 text-left"
          >
            {/* FormSubmit Config */}
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Nuevo mensaje de contacto en tu portafolio" />
            <input type="hidden" name="_next" value="https://ferbaez.github.io/Miguel-de-hoyos/" />
            
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-bold ml-1">Nombre</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                required 
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#F27D26] focus:bg-white/10 transition-all font-light placeholder:text-white/20" 
                placeholder="Tu nombre completo" 
              />
            </div>
            
            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-bold ml-1">Correo Electrónico</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                required 
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#F27D26] focus:bg-white/10 transition-all font-light placeholder:text-white/20" 
                placeholder="tu@correo.com" 
              />
            </div>
            
            <div className="flex flex-col gap-3">
              <label htmlFor="message" className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-bold ml-1">Mensaje</label>
              <textarea 
                name="message" 
                id="message" 
                required 
                rows={5} 
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#F27D26] focus:bg-white/10 transition-all resize-none font-light placeholder:text-white/20" 
                placeholder="Háblame de tu proyecto, plazos, presupuesto..."
              ></textarea>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="w-full flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#F27D26] hover:text-white transition-all shadow-xl mt-4"
            >
              Enviar Mensaje
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 hover:opacity-100 transition-opacity duration-700">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#F27D26]">hitster Ai</span>
            <span className="text-xs">© 2026 todos los derechos reservados para hitster media y hitster Ai</span>
          </div>
          
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold">
            <a href="#top" className="flex items-center gap-2 hover:text-[#F27D26] transition-colors">
              Volver arriba <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
