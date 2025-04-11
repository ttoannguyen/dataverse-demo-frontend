import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Header />
      <main className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-4">{t('home.title')}</h1>
        <p>{t('home.description')}</p>
      </main>
      <Footer />
    </>
  )
}
