import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import { Shield, ArrowRight, BookOpen, Users } from "lucide-react";

export default function Inicio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background video (blurred) */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0">
            <iframe
              src="https://player.vimeo.com/video/1166795283?autoplay=1&muted=1&loop=1&background=1&byline=0&title=0&playsinline=1&dnt=1"
              className="absolute inset-0 w-full h-full [filter:blur(10px)] scale-110"
              allow="autoplay; fullscreen; picture-in-picture"
              loading="lazy"
              title="Background Video"
            />
          </div>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="heading-hero">
                Bem-vindo à <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">DMS Security</span>
              </h1>
              <p className="lead text-muted-foreground">
                Segurança da Informação, privacidade e tecnologia com foco em conscientização, boas práticas e proteção de dados.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/sobre">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Users className="mr-2 h-4 w-4" /> Sobre
                  </Button>
                </a>
                <a href="/seguranca-tecnologia">
                  <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
                    <Shield className="mr-2 h-4 w-4" /> Segurança da Informação
                  </Button>
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-8">
              <h2 className="text-xl font-semibold mb-4">Acesse Conteúdos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="/dicas-seguranca" className="group rounded-lg border border-border p-4 hover:border-blue-500 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">Dicas Essenciais</div>
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Práticas recomendadas para o dia a dia</p>
                </a>
                <a href="/dicas-redes-sociais" className="group rounded-lg border border-border p-4 hover:border-blue-500 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">Segurança em Redes</div>
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Cuidados com contas e golpes online</p>
                </a>
                <a href="/seguranca-tecnologia" className="group rounded-lg border border-border p-4 hover:border-blue-500 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">Tecnologia e Segurança</div>
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Tendências e referências técnicas</p>
                </a>
                <a href="/pais-e-filhos" className="group rounded-lg border border-border p-4 hover:border-blue-500 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">Para Pais e Filhos</div>
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Guia prático para famílias</p>
                </a>
                <a href="/sobre" className="group rounded-lg border border-border p-4 hover:border-blue-500 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">Sobre</div>
                    <BookOpen className="transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Conheça minha trajetória</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
