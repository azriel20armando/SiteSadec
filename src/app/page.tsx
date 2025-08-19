"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * Next.js (App Router) single-file landing page for:
 * "Programa de Adesão de Angola às Zonas de Comércio Livre da SADC e da União Africana (AfCFTA)"
 *
 * ✔ 100% responsivo (mobile-first)
 * ✔ Tipografia legível, hierarquia clara
 * ✔ Paleta inspirada em Angola (vermelho, preto, dourado) + realce SADC (azul)
 * ✔ Call-to-action e formulário de contacto (client-side)
 * ✔ Seções: Hero, Sobre, Benefícios, Marcos/Timeline, Perguntas Frequentes, Recursos, Contacto
 * ✔ Acessível: contrastes altos, labels, focus states, aria-attrs
 *
 * Como usar no Next.js (App Router):
 * 1) Instale dependências: `npm i framer-motion`
 * 2) Garanta Tailwind configurado (postcss + globals.css). As classes desta página usam apenas utilitários padrão.
 * 3) Salve este arquivo em `app/page.tsx`.
 * 4) Personalize links, e-mails e textos conforme necessário.
 */

// Paleta de cores (compatível com Tailwind via classes) — também exposta como CSS vars
const palette = {
  primary: "#BF1B28", // Azul para realces e links
  accent: "#F29422",  // Laranja para destaques
  angolaRed: "#BF1B28",
  green: "#278C41",
  beige: "#F2E8DC",
  neutralBg: "#FFFFFF",
  neutralCard: "#F2E8DC",
  neutralText: "#000000",
  neutralMuted: "#6B6B6B",
};

export default function Page() {
  const [form, setForm] = useState({ nome: "", email: "", org: "", mensagem: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isOpen, setIsOpen] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.nome.trim()) e.nome = "Informe o seu nome";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "E-mail inválido";
    if (!form.mensagem.trim()) e.mensagem = "Escreva a sua mensagem";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function submit(evn: React.FormEvent) {
    evn.preventDefault();
    if (!validate()) return;
    // Exemplo: substitua por uma rota API (/app/api/contato/route.ts) ou serviço externo (Formspree)
    console.log("Contacto recebido:", form);
    setSent(true);
  }

  return (
    <main
      className="min-h-screen w-full text-base"
      style={{
        // CSS Vars para fácil branding
        // @ts-ignore
        "--primary": palette.primary,
        "--accent": palette.accent,
        "--angola-red": palette.angolaRed,
        "--green": palette.green,
        "--beige": palette.beige,
        "--neutral-bg": palette.neutralBg,
        "--neutral-card": palette.neutralCard,
        "--neutral-text": palette.neutralText,
        "--neutral-muted": palette.neutralMuted,
      } as React.CSSProperties}
    >
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/90 bg-white/80 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex justify-center items-center gap-2 group">
              <div className="w-20 h-20 mt-9"
                style={{  }}>
                  <img src="/logo.jpg" alt="" />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-wide text-black leading-tight">Programa de Adesão</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600">Angola • SADC & UA (AfCFTA)</p>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {[
                ["Sobre", "#sobre"],
                ["Benefícios", "#beneficios"],
                ["Marcos", "#marcos"],
                ["Recursos", "#recursos"],
                ["FAQ", "#faq"],
                ["Contacto", "#contacto"],
              ].map(([label, href]) => (
                <a key={href} href={href} className="text-gray-700 hover:text-black transition-colors">{label}</a>
              ))}
            </nav>
            <a href="#contacto" className="hidden md:inline-flex px-8 py-2 rounded-xl font-semibold"
               style={{ backgroundColor: "var(--primary)", color: "white" }}>
              Falar com a Equipa
            </a>
            <button
              className="md:hidden flex items-center justify-center w-10 h-10"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir menu"
            >
              <svg className="text-black" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute left-0 right-0 bg-white border-b border-black/10 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4 text-sm">
              {[
                ["Sobre", "#sobre"],
                ["Benefícios", "#beneficios"],
                ["Marcos", "#marcos"],
                ["Recursos", "#recursos"],
                ["FAQ", "#faq"],
                ["Contacto", "#contacto"],
              ].map(([label, href]) => (
                <a key={href} href={href} className="text-gray-700 hover:text-black transition-colors" onClick={() => setIsOpen(false)}>{label}</a>
              ))}
              <a href="#contacto" className="px-4 py-2 rounded-xl font-semibold text-center"
                 style={{ backgroundColor: "#BF1B28", color: "white" }} onClick={() => setIsOpen(false)}>
                Falar com a Equipa
              </a>
            </div>
          </motion.nav>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "var(--neutral-bg)", color: "var(--neutral-text)" }}>
        <div className="absolute inset-0 opacity-10"
             style={{ background: `radial-gradient(1200px 600px at 20% -10%, var(--angola-red), transparent 60%), radial-gradient(800px 400px at 120% 20%, var(--primary), transparent 60%)` }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                Angola rumo à integração plena nas Zonas de Comércio Livre
              </h1>
              <p className="mt-4 text-gray-600 max-w-prose">
                Plataforma oficial para divulgar o <strong>Programa de Adesão de Angola</strong> à <strong>SADC Free Trade Area</strong> e à <strong>AfCFTA (União Africana)</strong>, com informação, documentos e canais de contacto para empresas e instituições.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#beneficios" className="px-9 py-3 rounded-xl font-semibold" style={{ backgroundColor: "#278C41", color: "white" }}>Ver Benefícios</a>
                <a href="#recursos" className="px-5 py-3 rounded-xl font-semibold border border-black/20 hover:border-black/40">Guias & Documentos</a>
              </div>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {[
                  { k: "Estados SADC na ZCL", v: "13→14" },
                  { k: "AfCFTA: Estado de Parte", v: "Desde 2020" },
                  { k: "Redução Tarifária", v: "até 90%" },
                  { k: "População Mercado", v: "1.3B+" },
                ].map((i) => (
                  <div key={i.k} className="rounded-2xl p-4 border border-black/10 bg-black/5">
                    <p className="text-sm text-gray-500">{i.k}</p>
                    <p className="text-xl font-bold">{i.v}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="relative rounded-3xl overflow-hidden border border-black/10 shadow-2xl">
                <img src="/home-foto.jpg" alt="" />
                <div className="absolute inset-0 p-4 flex items-end justify-between">
                  <span className="text-xs bg-white/60 px-3 py-1 rounded-full">SADC • AfCFTA • Angola</span>
                  <span className="text-xs bg-white/60 px-3 py-1 rounded-full">Comércio & Integração</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-16 md:py-24" style={{ backgroundColor: "var(--neutral-bg)", color: "var(--neutral-text)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold">Sobre o Programa</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              O Programa de Adesão coordena medidas jurídicas, aduaneiras, de facilitação do comércio e de comunicação para alinhar Angola aos mecanismos da <strong>Zona de Comércio Livre da SADC</strong> e à <strong>Área de Livre Comércio Continental Africana (AfCFTA)</strong>. Inclui reformas tarifárias, regras de origem, janela única, e capacitação do sector privado.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { title: "Harmonização Legal", desc: "Adequação de pautas, protocolos e procedimentos." },
                { title: "Digitalização", desc: "Plataformas para certificados, licenças e reporte de barreiras." },
                { title: "Competitividade", desc: "Apoio a PME, exportadores e cadeia de valor regional." },
                { title: "Transparência", desc: "Calendário de liberalização e monitorização pública." },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl p-5 border border-black/10 bg-black/5">
                  <p className="font-semibold">{c.title}</p>
                  <p className="text-gray-600 text-sm mt-1">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="space-y-4">
            <div className="rounded-2xl p-5 border border-black/10" style={{ backgroundColor: "var(--beige)" }}>
              <p className="text-sm text-gray-700">Status sintetizado</p>
              <ul className="mt-2 text-sm list-disc pl-5 space-y-2">
                <li><strong>AfCFTA</strong>: Angola é <em>Estado Parte</em> (depósito de ratificação em 2020).</li>
                <li><strong>SADC FTA</strong>: Angola em fase final de adesão, tornando-se o 14.º membro participante.</li>
                <li><strong>Âmbito</strong>: Redução gradativa de tarifas (até 90%) e remoção de barreiras não-tarifárias.</li>
              </ul>
            </div>
            <div className="rounded-2xl p-5 border border-black/10" style={{ backgroundColor: "var(--beige)" }}>
              <p className="text-sm text-gray-700">Canais de Informação</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>Secretariado SADC • Portal TIFI</li>
                <li>União Africana • AfCFTA Secretariat</li>
                <li>MinFin, MEP, MIREX, MINDCOM (Angola)</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="beneficios" className="py-16 md:py-24" style={{ backgroundColor: "var(--neutral-bg)", color: "var(--neutral-text)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Benefícios esperados</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Acesso ampliado a mercados",
                desc: "Preferências tarifárias na SADC e, de forma faseada, no continente sob a AfCFTA.",
              },
              {
                title: "Integração de cadeias de valor",
                desc: "Mais competitividade para agroindústria, mineração transformadora e manufaturas.",
              },
              {
                title: "Facilitação do comércio",
                desc: "Procedimentos aduaneiros modernizados, regras de origem claras e reporte de BNTs.",
              },
              { title: "Investimento & emprego", desc: "Ambiente mais previsível para IDE e inovação, com impacto no emprego." },
              { title: "Diversificação", desc: "Menos dependência de petróleo, mais exportações de bens e serviços." },
              { title: "PME no centro", desc: "Capacitação, feiras, missões empresariais e financiamento comercial." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl p-5 border border-black/10 bg-black/5">
                <p className="font-semibold">{c.title}</p>
                <p className="text-gray-600 text-sm mt-1">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARCOS / TIMELINE */}
      <section id="marcos" className="py-16 md:py-24" style={{ backgroundColor: "var(--neutral-bg)", color: "var(--neutral-text)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Marcos principais</h2>
          <ol className="mt-8 relative border-l border-black/10 pl-6 space-y-8">
            {[
              { data: "2018", titulo: "Assinatura do Acordo AfCFTA (Kigali)", detalhe: "Angola entre os signatários." },
              { data: "2020", titulo: "Ratificação AfCFTA por Angola", detalhe: "Depósito dos instrumentos e status de Estado Parte." },
              { data: "2021–2024", titulo: "Arranque operacional AfCFTA", detalhe: "Faseada implementação, regras de origem e GTI." },
              { data: "2024–2025", titulo: "Angola finaliza adesão à SADC FTA", detalhe: "Conclusão técnica no âmbito da SADC, rumo à formalização." },
            ].map((m, idx) => (
              <li key={idx} className="ml-2">
                <div className="absolute -left-[9px] mt-1 w-4 h-4 rounded-full" style={{ backgroundColor: idx === 3 ? "var(--green)" : "var(--primary)" }} />
                <div className="p-4 rounded-2xl border border-black/10 bg-black/5">
                  <p className="text-sm text-gray-500">{m.data}</p>
                  <p className="font-semibold">{m.titulo}</p>
                  <p className="text-sm text-gray-600">{m.detalhe}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* RECURSOS / DOCUMENTOS */}
      <section id="recursos" className="py-16 md:py-24" style={{ backgroundColor: "var(--neutral-bg)", color: "var(--neutral-text)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Recursos oficiais</h2>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                nome: "SADC • Free Trade Area (TIFI)",
                href: "https://tis.sadc.int/french/regional-integration/tifi/sadc-free-trade-area/fta-brochure/",
                desc: "Informações institucionais e brochuras sobre a ZCL da SADC.",
              },
              {
                nome: "SADC • Comunicado sobre Angola",
                href: "https://www.sadc.int/latest-news/angola-finalises-preparations-join-sadc-free-trade-area-strengthening-regional-economic",
                desc: "Angola finaliza preparação para adesão como 14.º participante da ZCL.",
              },
              {
                nome: "União Africana • AfCFTA",
                href: "https://au.int/",
                desc: "Acordo, protocolos e implementação continental (UA/Secretariado AfCFTA).",
              },
              {
                nome: "UNECA • Nota sobre ratificação de Angola",
                href: "https://www.uneca.org/storys/afcfta-expects-wave-ratifications-following-angola",
                desc: "Angola como 30.º Estado Parte ao depositar os instrumentos (2020).",
              },
              {
                nome: "TRALAC • Estado das ratificações",
                href: "https://www.tralac.org/resources/infographic/13795-status-of-afcfta-ratification.html",
                desc: "Panorama actualizado de assinaturas e ratificações do AfCFTA.",
              },
              {
                nome: "Portal do Governo de Angola",
                href: "https://governo.gov.ao/",
                desc: "Notícias e documentos governamentais relevantes.",
              },
            ].map((r) => (
              <a key={r.href} href={r.href} target="_blank" rel="noreferrer"
                 className="rounded-2xl p-5 border border-black/10 bg-black/5 hover:border-black/30 transition-colors">
                <p className="font-semibold">{r.nome}</p>
                <p className="text-sm text-gray-600">{r.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24" style={{ backgroundColor: "var(--neutral-bg)", color: "var(--neutral-text)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Perguntas frequentes</h2>
          <div className="mt-6 divide-y divide-black/10 border border-black/10 rounded-2xl overflow-hidden">
            {[
              {
                q: "Quando Angola passa a beneficiar totalmente da ZCL da SADC?",
                a: "Após a formalização da adesão e entrada em vigor do cronograma tarifário acordado; a implementação é faseada por sectores/produtos.",
              },
              {
                q: "O que muda com a AfCFTA para as empresas?",
                a: "Amplia mercados, reduz tarifas em até 90% ao longo do tempo e harmoniza regras de origem, com mecanismos para reportar barreiras não-tarifárias.",
              },
              {
                q: "Há apoio para PME exportadoras?",
                a: "Sim. O Programa prevê capacitação, informação sobre requisitos e facilitação de acesso a feiras e financiamento comercial.",
              },
            ].map((f, i) => (
              <details key={i} className="group bg-black/5 open:bg-black/10 ">
                <summary className="list-none cursor-pointer p-5 font-semibold flex items-center justify-between">
                  {f.q}
                  <span className="text-xs text-gray-500 group-open:rotate-45 transition-transform">＋</span>
                </summary>
                <div className="p-5 pt-0 text-gray-600 text-sm">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-16 md:py-24" style={{ backgroundColor: "var(--neutral-bg)", color: "var(--neutral-text)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Entre em contacto</h2>
          <p className="mt-2 text-gray-600">Use o formulário para dúvidas, parcerias e imprensa.</p>
          <form onSubmit={submit} className="mt-6 grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm text-gray-600" htmlFor="nome">Nome</label>
              <input id="nome" name="nome" value={form.nome}
                     onChange={(e) => setForm({ ...form, nome: e.target.value })}
                     className="mt-1 w-full rounded-xl bg-white/40 border border-black/10 p-3 outline-none focus:ring-2 focus:ring-[var(--primary)]"
                     placeholder="O seu nome completo" />
              {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome}</p>}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600" htmlFor="email">E-mail</label>
                <input id="email" name="email" value={form.email}
                       onChange={(e) => setForm({ ...form, email: e.target.value })}
                       type="email"
                       className="mt-1 w-full rounded-xl bg-white/40 border border-black/10 p-3 outline-none focus:ring-2 focus:ring-[var(--primary)]"
                       placeholder="ex: nome@empresa.co.ao" />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm text-gray-600" htmlFor="org">Organização (opcional)</label>
                <input id="org" name="org" value={form.org}
                       onChange={(e) => setForm({ ...form, org: e.target.value })}
                       className="mt-1 w-full rounded-xl bg-white/40 border border-black/10 p-3 outline-none focus:ring-2 focus:ring-[var(--primary)]"
                       placeholder="Empresa/Instituição" />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600" htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem" value={form.mensagem}
                        onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                        rows={6}
                        className="mt-1 w-full rounded-xl bg-white/40 border border-black/10 p-3 outline-none focus:ring-2 focus:ring-[var(--primary)]"
                        placeholder="Como podemos ajudar?" />
              {errors.mensagem && <p className="text-red-500 text-xs mt-1">{errors.mensagem}</p>}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" className="px-5 py-3 rounded-xl font-semibold disabled:opacity-60"
                      style={{ backgroundColor: "var(--primary)", color: "white" }} disabled={sent}>
                {sent ? "Enviado ✓" : "Enviar mensagem"}
              </button>
              <a href={`mailto:contacto@exemplo.gov.ao?subject=Contacto%20Programa%20de%20Ades%C3%A3o&body=Nome:%20${encodeURIComponent(form.nome)}%0AEmail:%20${encodeURIComponent(form.email)}%0AOrg:%20${encodeURIComponent(form.org)}%0AMensagem:%20${encodeURIComponent(form.mensagem)}`}
                 className="text-sm underline underline-offset-4 hover:no-underline">
                ou enviar por e-mail
              </a>
            </div>

            {sent && (
              <p className="text-sm text-green-500">Mensagem registada localmente. Integre uma rota API para envio real (ex.: Formspree ou servidor).</p>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-black/10" style={{ backgroundColor: "var(--neutral-bg)", color: "var(--neutral-text)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p className="text-gray-500">© {new Date().getFullYear()} Programa de Adesão • República de Angola</p>
          <div className="flex flex-wrap gap-3 items-center">
            <a href="#sobre" className="hover:underline">Sobre</a>
            <a href="#recursos" className="hover:underline">Recursos</a>
            <a href="#contacto" className="hover:underline">Contacto</a>
            <span className="inline-flex items-center gap-1 text-gray-500">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--accent)" }}></span>
              <span>Actualizado {new Date().toLocaleDateString("pt-PT")}</span>
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}

