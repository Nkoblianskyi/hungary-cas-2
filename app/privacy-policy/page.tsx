import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Política de Privacidade</h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900 rounded-lg p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">1. Informações que Recolhemos</h2>
                <p className="text-gray-300 mb-4">
                  Recolhemos informações que nos fornece diretamente, como quando cria uma conta, subscreve a nossa
                  newsletter ou nos contacta para suporte.
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>• Dados pessoais (nome, endereço de email)</li>
                  <li>• Dados de utilização e análises</li>
                  <li>• Informações do dispositivo e navegador</li>
                  <li>• Cookies e tecnologias de rastreamento</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">2. Como Utilizamos os Seus Dados</h2>
                <p className="text-gray-300 mb-4">Utilizamos as informações recolhidas para:</p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>• Fornecer e melhorar os nossos serviços</li>
                  <li>• Enviar-lhe atualizações e material de marketing</li>
                  <li>• Analisar padrões de utilização e tendências</li>
                  <li>• Garantir segurança e prevenir fraudes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">3. Partilha de Informações</h2>
                <p className="text-gray-300">
                  Não vendemos, comercializamos ou transferimos os seus dados pessoais para terceiros sem o seu
                  consentimento, exceto conforme descrito nesta política.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">4. Segurança dos Dados</h2>
                <p className="text-gray-300">
                  Implementamos medidas de segurança adequadas para proteger os seus dados pessoais contra acesso não
                  autorizado, alteração, divulgação ou destruição.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">5. Os Seus Direitos</h2>
                <p className="text-gray-300 mb-4">Tem o direito de:</p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>• Aceder aos seus dados pessoais</li>
                  <li>• Corrigir informações incorretas</li>
                  <li>• Eliminar os seus dados pessoais</li>
                  <li>• Cancelar a subscrição de comunicações de marketing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">6. Contacte-nos</h2>
                <p className="text-gray-300">
                  Se tiver questões sobre esta Política de Privacidade, contacte-nos através de
                  privacy@melhoresasinosportugal.com
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
