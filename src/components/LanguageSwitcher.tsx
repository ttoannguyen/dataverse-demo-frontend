import { useTranslation } from 'react-i18next'

const LanguageSwitcherder = () =>  {
  const { i18n } = useTranslation()
  return (
    <div className="space-x-2 text-sm">
      <button onClick={() => i18n.changeLanguage('vi')}>VI</button>|
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
    </div>
  )
}
export default LanguageSwitcherder;