export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-blue-400">DMS Security</a>
        <nav className="flex items-center gap-6 md:gap-8 flex-wrap justify-end">
          <a href="/" className="hover:text-blue-400 transition-colors text-sm md:text-base">Início</a>
          <a href="/sobre" className="hover:text-blue-400 transition-colors text-sm md:text-base">Sobre</a>
          <a href="/seguranca-tecnologia" className="hover:text-blue-400 transition-colors text-sm md:text-base">Segurança da Informação</a>
          <a href="/dicas-seguranca" className="hover:text-blue-400 transition-colors text-sm md:text-base">Dicas Essenciais</a>
          <a href="/dicas-redes-sociais" className="hover:text-blue-400 transition-colors text-sm md:text-base">Segurança em Redes Sociais</a>
        </nav>
      </div>
    </header>
  );
}
