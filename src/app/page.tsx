// src/app/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold text-[#BF1B28]">
            Angola • Integração Regional
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            <li><a href="#sobre" className="hover:text-[#1F67A6]">Sobre</a></li>
            <li><a href="#proposta" className="hover:text-[#278C41]">Proposta</a></li>
            <li><a href="#discursos" className="hover:text-[#F29422]">Discursos</a></li>
            <li><a href="#beneficios" className="hover:text-[#BF1B28]">Benefícios</a></li>
            <li><a href="#contacto" className="hover:text-[#1F67A6]">Contacto</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#F2E8DC] p-4 space-y-4 font-medium"
          >
            <li><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a></li>
            <li><a href="#proposta" onClick={() => setMenuOpen(false)}>Proposta</a></li>
            <li><a href="#discursos" onClick={() => setMenuOpen(false)}>Discursos</a></li>
            <li><a href="#beneficios" onClick={() => setMenuOpen(false)}>Benefícios</a></li>
            <li><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a></li>
          </motion.ul>
        )}
      </header>

      {/* Hero */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-[#1F67A6]">
          Angola rumo à Integração Regional
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl">
          Programa de Adesão de Angola às Zonas de Comércio Livre da SADC e da União Africana.
        </p>
        <a
          href="#contacto"
          className="mt-6 px-6 py-3 rounded-2xl bg-[#BF1B28] text-white font-semibold hover:bg-[#a51520] transition"
        >
          Entre em Contacto
        </a>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-[#278C41] mb-6">Sobre o Programa</h3>
        <p className="text-gray-700 leading-relaxed">
          Angola aderiu formalmente à Zona de Comércio Livre da SADC em junho de 2025, 
          consolidando a sua participação no processo de integração regional africana. 
          Este passo abre oportunidades significativas para exportações, diversificação económica 
          e fortalecimento do empresariado nacional. 
          <br /><br />
          A nível continental, Angola ratificou a Zona de Comércio Livre Continental Africana (ZCLCA), 
          criando acesso a um mercado de 1,3 bilião de consumidores.
        </p>
      </section>

      {/* Proposta */}
      <section id="proposta" className="py-20 bg-[#F2E8DC] px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-[#1F67A6] mb-6">
            Proposta de Intervenção
          </h3>
          <p className="text-gray-800 leading-relaxed">
            Discurso de Sua Excelência o Senhor Ministro da Indústria e Comércio, 
            dirigido ao sector privado e à sociedade civil em geral, Julho de 2025.
          </p>
          <a
            href="/docs/proposta.pdf"
            download
            className="inline-flex items-center mt-6 px-6 py-3 rounded-2xl bg-[#278C41] text-white font-semibold hover:bg-[#1e6b34] transition"
          >
            <FileDown className="mr-2" size={20} /> Baixar PDF
          </a>
        </div>
      </section>

      {/* Discursos */}
      <section id="discursos" className="py-20 max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-[#F29422] mb-6">Discursos e Publicações</h3>
        <div className="space-y-4">
          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-[#BF1B28]">
              Angola e o Futuro Continental: ZCLCA
            </h4>
            <p className="text-sm text-gray-700 mt-2">
              Análise do economista Arsénio Bumba sobre as oportunidades da integração de Angola na AfCFTA.
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="py-20 bg-[#F2E8DC] px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-[#278C41] mb-6">Benefícios da Adesão</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>Acesso preferencial a mercados regionais.</li>
            <li>Fortalecimento do empresariado nacional.</li>
            <li>Promoção da diversificação económica.</li>
            <li>Integração em cadeias de valor regionais e continentais.</li>
          </ul>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 max-w-3xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-[#1F67A6] mb-6">Entre em Contacto</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nome"
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
            required
          />
          <textarea
            placeholder="Mensagem"
            className="w-full p-3 border rounded-lg h-32"
            required
          />
          <button
            type="submit"
            className="w-full py-3 rounded-2xl bg-[#BF1B28] text-white font-semibold hover:bg-[#a51520] transition"
          >
            Enviar Mensagem
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F67A6] text-white py-6 mt-10">
        <div className="max-w-5xl mx-auto text-center text-sm">
          © 2025 Ministério da Indústria e Comércio de Angola. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}
