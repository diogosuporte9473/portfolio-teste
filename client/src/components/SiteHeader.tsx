import { useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-blue-400">DMS Security</a>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-border px-3 py-2 text-sm hover:bg-muted/30"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(v => !v)}
        >
          Menu
        </button>
        <nav className="hidden md:flex items-center gap-6 md:gap-8 justify-end">
          <a href="/" className="hover:text-blue-400 transition-colors text-sm md:text-base">Início</a>
          <a href="/sobre" className="hover:text-blue-400 transition-colors text-sm md:text-base">Sobre</a>
          <a href="/seguranca-tecnologia" className="hover:text-blue-400 transition-colors text-sm md:text-base">Segurança da Informação</a>
          <a href="/dicas-seguranca" className="hover:text-blue-400 transition-colors text-sm md:text-base">Dicas Essenciais</a>
          <a href="/dicas-redes-sociais" className="hover:text-blue-400 transition-colors text-sm md:text-base">Segurança em Redes Sociais</a>
          <a href="/pais-e-filhos" className="hover:text-blue-400 transition-colors text-sm md:text-base">Para Pais e Filhos</a>
        </nav>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden border-t border-border ${open ? "block" : "hidden"}`}
      >
        <nav className="container max-w-6xl mx-auto px-4 py-3 grid gap-3">
          <a href="/" className="hover:text-blue-400 transition-colors text-sm">Início</a>
          <a href="/sobre" className="hover:text-blue-400 transition-colors text-sm">Sobre</a>
          <a href="/seguranca-tecnologia" className="hover:text-blue-400 transition-colors text-sm">Segurança da Informação</a>
          <a href="/dicas-seguranca" className="hover:text-blue-400 transition-colors text-sm">Dicas Essenciais</a>
          <a href="/dicas-redes-sociais" className="hover:text-blue-400 transition-colors text-sm">Segurança em Redes Sociais</a>
          <a href="/pais-e-filhos" className="hover:text-blue-400 transition-colors text-sm">Para Pais e Filhos</a>
        </nav>
      </div>
    </header>
  );
}
