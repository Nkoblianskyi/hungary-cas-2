import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Política de Cookies</h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900 rounded-lg p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">O que são Cookies?</h2>
                <p className="text-gray-300">
                  Os cookies são pequenos ficheiros de texto que são armazenados no seu computador ou dispositivo móvel
                  quando visita o nosso website. Ajudam-nos a proporcionar-lhe uma melhor experiência, guardando as suas
                  preferências e analisando como utiliza o nosso website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Tipos de Cookies que Utilizamos</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-red-500 mb-2">Cookies Necessários</h3>
                    <p className="text-gray-300">
                      Estes cookies são essenciais para o funcionamento adequado do website. Permitem funcionalidades
                      básicas como navegação de páginas e acesso a áreas seguras do website.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-red-500 mb-2">Cookies de Análise</h3>
                    <p className="text-gray-300">
                      Utilizamos cookies de análise para compreender como os visitantes interagem com o nosso website.
                      Isto ajuda-nos a melhorar o nosso conteúdo e a experiência do utilizador.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-red-500 mb-2">Cookies de Marketing</h3>
                    <p className="text-gray-300">
                      Estes cookies rastreiam os seus hábitos de navegação para lhe mostrar anúncios relevantes e medir
                      a eficácia das nossas campanhas de marketing.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Gestão de Cookies</h2>
                <p className="text-gray-300 mb-4">Pode controlar e gerir cookies de várias formas:</p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>• Utilize o nosso banner de cookies para aceitar ou rejeitar cookies</li>
                  <li>• Ajuste as definições do seu navegador para bloquear ou eliminar cookies</li>
                  <li>• Utilize extensões do navegador para gestão de cookies</li>
                  <li>• Cancele a subscrição de cookies publicitários de terceiros</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Cookies de Terceiros</h2>
                <p className="text-gray-300">
                  Podemos utilizar serviços de terceiros como o Google Analytics que podem definir os seus próprios
                  cookies. Estes serviços têm as suas próprias políticas de privacidade e práticas de cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Atualizações desta Política</h2>
                <p className="text-gray-300">
                  Podemos atualizar esta Política de Cookies periodicamente. Todas as alterações serão publicadas nesta
                  página com uma data de revisão atualizada.
                </p>
              </section>

              
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
