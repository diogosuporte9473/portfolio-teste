import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, AlertCircle, Cloud, Brain, Users, CheckCircle2, Zap, Lock, Bell, Database } from "lucide-react";

export default function SegurancaTecnologia() {
  const publicoAlvo = [
    "Profissionais de TI e Segurança",
    "CISOs, Gestores e Líderes",
    "Analistas e Especialistas",
    "Estudantes e Iniciantes",
    "Desenvolvedores e SRE/DevOps",
  ];

  const noticiasRecentes = [
    {
      titulo: "Vulnerabilidades críticas",
      itens: [
        "Exploits ativos em bibliotecas populares e componentes de supply chain",
        "Novas falhas em serviços gerenciados de nuvem com impacto global",
        "Explorações de privilege escalation em sistemas operacionais modernos",
      ],
    },
    {
      titulo: "Ameaças emergentes",
      itens: [
        "Campanhas de phishing com uso de IA e deepfakes",
        "Ataques a MFA por push fatigue e token theft",
        "Golpes de engenharia social com automação generativa",
      ],
    },
    {
      titulo: "Vazamentos de dados",
      itens: [
        "Exposição de buckets e repositórios públicos mal configurados",
        "Credenciais vazadas em repositórios e pacotes de terceiros",
        "Incidentes decorrentes de integrações SaaS sem governança",
      ],
    },
    {
      titulo: "Novas tecnologias",
      itens: [
        "Controles de Zero Trust integrados a plataformas de identidade",
        "Sistemas de detecção baseados em comportamento e IA",
        "Ferramentas de SBOM e verificação de integridade de builds",
      ],
    },
  ];

  const educacional = [
    {
      titulo: "Conceitos fundamentais",
      itens: [
        "Confidencialidade, Integridade, Disponibilidade, Autenticidade e Não Repúdio",
        "Gestão de riscos, ameaça, vulnerabilidade e probabilidade",
        "Criptografia, hashing, assinatura digital e PKI",
      ],
    },
    {
      titulo: "Boas práticas",
      itens: [
        "Políticas de senha, MFA e gestão de identidades",
        "Princípio do menor privilégio e segregação de funções",
        "Backup 3-2-1, testes de restauração e plano de resposta a incidentes",
      ],
    },
    {
      titulo: "Guias e tutoriais",
      itens: [
        "Checklists de hardening para sistemas e serviços de nuvem",
        "Guia de segurança para desenvolvedores: validação, autenticação e logs",
        "Passo a passo para inventário de ativos e avaliação de risco",
      ],
    },
    {
      titulo: "Frameworks e padrões",
      itens: [
        "NIST CSF, ISO/IEC 27001, CIS Controls",
        "OWASP ASVS, Top 10 e SAMM",
        "MITRE ATT&CK para mapeamento de táticas e técnicas",
      ],
    },
  ];

  const tendencias = [
    {
      titulo: "Zero Trust",
      itens: [
        "Verificação contínua de identidade e contexto",
        "Microsegmentação e políticas dinâmicas",
        "Telemetria e avaliação de postura de dispositivos",
      ],
    },
    {
      titulo: "Cloud Security",
      itens: [
        "CSPM, CWPP e CNAPP para visibilidade e proteção",
        "Segurança em pipelines e imagens de contêiner",
        "Gestão de chaves, segredos e acesso federado",
      ],
    },
    {
      titulo: "IA aplicada à segurança",
      itens: [
        "Detecção de anomalias comportamentais",
        "Análise de ameaças e priorização de alertas",
        "Automação de playbooks e SOAR",
      ],
    },
    {
      titulo: "Threat Intelligence",
      itens: [
        "Feeds de IOCs e correlação com telemetria interna",
        "Hunters e mapeamento com ATT&CK",
        "Compartilhamento de inteligência entre equipes",
      ],
    },
    {
      titulo: "DevSecOps",
      itens: [
        "Shift-left com SAST, DAST e SCA",
        "SBOM, assinaturas e verificação de supply chain",
        "Políticas como código e gate de qualidade",
      ],
    },
  ];

  const ferramentas = [
    {
      titulo: "Recomendadas",
      itens: [
        "Gerenciadores de senhas com MFA",
        "Plataformas de EDR/XDR integradas",
        "WAF, IDS/IPS e proteção de API",
      ],
    },
    {
      titulo: "Monitoramento",
      itens: [
        "SIEM com ingestão de logs e UEBA",
        "Observabilidade de aplicações e infraestrutura",
        "Dashboards de postura de segurança",
      ],
    },
    {
      titulo: "Open source",
      itens: [
        "Ferramentas de varredura SAST/SCA",
        "Coletas de logs e pipelines de dados",
        "Ambientes de análise de malware e sandbox",
      ],
    },
    {
      titulo: "Labs e prática",
      itens: [
        "Ambientes vulneráveis controlados para estudo",
        "Desafios de pentest e CTFs",
        "Laboratórios de nuvem com créditos gratuitos",
      ],
    },
  ];

  const alertas = [
    {
      titulo: "CVEs recentes",
      itens: [
        "Priorizar CVSS e contexto de exposição",
        "Correção baseada em risco e impacto no negócio",
        "Acompanhamento de exploração ativa e PoCs",
      ],
    },
    {
      titulo: "Alertas globais",
      itens: [
        "Comunicados de agências e fornecedores",
        "Boletins de vulnerabilidade em larga escala",
        "Campanhas ativas contra setores específicos",
      ],
    },
    {
      titulo: "Recomendações",
      itens: [
        "Mitigações temporárias e compensatórias",
        "Janela de manutenção e rollback plano",
        "Validação pós-correção e auditoria",
      ],
    },
  ];

  const fontes = [
    "OWASP",
    "NIST",
    "CISA",
    "Krebs on Security",
    "The Hacker News",
    "BleepingComputer",
    "Microsoft Security Blog",
    "Google Security Blog",
    "Cisco Talos",
    "Kaspersky Threat Intelligence",
    "SANS Institute",
    "MITRE ATT&CK",
  ];

  const seo = {
    palavras: [
      "Segurança da Informação",
      "Cibersegurança",
      "Zero Trust",
      "Cloud Security",
      "DevSecOps",
      "Threat Intelligence",
      "Vulnerabilidades",
      "CVE",
      "Boas práticas de segurança",
      "Privacidade e conformidade",
    ],
    descricao:
      "Portal de Segurança da Informação e Tecnologia com notícias, educação, tendências e recursos práticos para profissionais, estudantes e líderes.",
    tags: ["segurança", "cibersegurança", "cloud", "devsecops", "zero trust", "cve", "threat intel"],
  };

  const automacao = [
    "Ingestão diária de RSS de fontes confiáveis com deduplicação",
    "Enriquecimento de CVEs via APIs públicas e priorização por risco",
    "Geração de boletins semanais automatizados e envio por e-mail",
    "Publicação programada com verificação de links e revisão",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-foreground">
      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur border-b border-slate-800">
        <div className="container flex items-center justify-between h-16">
          <Link href="/">
            <a className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors">
              <ArrowLeft size={20} />
              <span>Voltar</span>
            </a>
          </Link>
          <h1 className="text-lg font-bold text-white">Segurança & Tecnologia</h1>
          <div className="w-20" />
        </div>
      </header>

      <main className="container py-8 sm:py-12">
        <section className="mb-12">
          <h2 className="heading-section text-center mb-4">Centro de Segurança da Informação e Tecnologia</h2>
          <p className="lead text-slate-300 max-w-4xl mx-auto text-center">
            Conteúdo atualizado sobre ameaças, vulnerabilidades, tendências, educação e recursos práticos para apoiar
            decisões técnicas e estratégicas em cibersegurança.
          </p>
        </section>

        <section className="mb-12">
          <Card className="bg-slate-900/60 border-slate-700 p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">Propósito</h3>
                <p className="text-slate-300">
                  Consolidar notícias, educar profissionais e orientar estratégias com base em boas práticas e
                  frameworks reconhecidos, promovendo maturidade em segurança.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">Público-Alvo</h3>
                <ul className="text-slate-300 space-y-1">
                  {publicoAlvo.map((p, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-green-400" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="text-amber-400" size={22} />
            <h3 className="text-2xl font-bold">Notícias Recentes</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {noticiasRecentes.map((g, idx) => (
              <Card key={idx} className="bg-slate-900/60 border-slate-700 p-6">
                <h4 className="text-lg font-bold text-blue-400 mb-3">{g.titulo}</h4>
                <ul className="text-slate-300 space-y-2">
                  {g.itens.map((it, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Zap size={16} className="text-cyan-400 mt-1" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <BookOpenIcon />
            <h3 className="text-2xl font-bold">Conteúdos Educacionais</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {educacional.map((g, idx) => (
              <Card key={idx} className="bg-slate-900/60 border-slate-700 p-6">
                <h4 className="text-lg font-bold text-blue-400 mb-3">{g.titulo}</h4>
                <ul className="text-slate-300 space-y-2">
                  {g.itens.map((it, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Shield size={16} className="text-blue-400 mt-1" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <TrendingIcon />
            <h3 className="text-2xl font-bold">Tendências e Inovação</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tendencias.map((g, idx) => (
              <Card key={idx} className="bg-slate-900/60 border-slate-700 p-6">
                <h4 className="text-lg font-bold text-blue-400 mb-3">{g.titulo}</h4>
                <ul className="text-slate-300 space-y-2">
                  {g.itens.map((it, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Brain size={16} className="text-purple-400 mt-1" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <ToolsIcon />
            <h3 className="text-2xl font-bold">Ferramentas e Recursos</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {ferramentas.map((g, idx) => (
              <Card key={idx} className="bg-slate-900/60 border-slate-700 p-6">
                <h4 className="text-lg font-bold text-blue-400 mb-3">{g.titulo}</h4>
                <ul className="text-slate-300 space-y-2">
                  {g.itens.map((it, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Cloud size={16} className="text-cyan-400 mt-1" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="text-rose-400" size={22} />
            <h3 className="text-2xl font-bold">Alertas e Vulnerabilidades</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {alertas.map((g, idx) => (
              <Card key={idx} className="bg-slate-900/60 border-slate-700 p-6">
                <h4 className="text-lg font-bold text-blue-400 mb-3">{g.titulo}</h4>
                <ul className="text-slate-300 space-y-2">
                  {g.itens.map((it, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Lock size={16} className="text-rose-400 mt-1" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
            <Card className="bg-slate-900/60 border-slate-700 p-6">
              <h4 className="text-lg font-bold text-blue-400 mb-3">Frequência de atualização</h4>
              <ul className="text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <Database size={16} className="text-blue-400 mt-1" />
                  <span>Daily: ingestão de CVEs e alertas, priorização por risco</span>
                </li>
                <li className="flex items-start gap-2">
                  <Database size={16} className="text-blue-400 mt-1" />
                  <span>Weekly: boletim consolidado com recomendações e impactos</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Users className="text-emerald-400" size={22} />
            <h3 className="text-2xl font-bold">Fontes confiáveis de referência</h3>
          </div>
          <Card className="bg-slate-900/60 border-slate-700 p-6">
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {fontes.map((f, i) => (
                <li key={i} className="text-slate-300 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-400" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="text-blue-400" size={22} />
            <h3 className="text-2xl font-bold">SEO e estrutura</h3>
          </div>
          <Card className="bg-slate-900/60 border-slate-700 p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-blue-400 mb-2">Palavras-chave</h4>
                <p className="text-slate-300">{seo.palavras.join(", ")}</p>
              </div>
              <div>
                <h4 className="font-bold text-blue-400 mb-2">Meta descrição</h4>
                <p className="text-slate-300">{seo.descricao}</p>
              </div>
              <div>
                <h4 className="font-bold text-blue-400 mb-2">Tags recomendadas</h4>
                <p className="text-slate-300">{seo.tags.join(", ")}</p>
              </div>
              <div>
                <h4 className="font-bold text-blue-400 mb-2">Categorias e menu</h4>
                <p className="text-slate-300">
                  Notícias, Educação, Tendências, Ferramentas, Alertas, Referências, Automação.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="text-cyan-400" size={22} />
            <h3 className="text-2xl font-bold">Automação e atualização contínua</h3>
          </div>
          <Card className="bg-slate-900/60 border-slate-700 p-6">
            <ul className="text-slate-300 space-y-2">
              {automacao.map((a, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Bell size={16} className="text-cyan-400 mt-1" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a href="mailto:diogo@dmssecurity.com.br">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg">
                  Receber boletins e alertas
                </Button>
              </a>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
}

function BookOpenIcon() {
  return <Shield className="text-blue-400" size={22} />;
}

function TrendingIcon() {
  return <Zap className="text-purple-400" size={22} />;
}

function ToolsIcon() {
  return <Cloud className="text-cyan-400" size={22} />;
}

