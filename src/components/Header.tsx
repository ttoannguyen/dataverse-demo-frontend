import { Link } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-bold text-forest">STAR-FARM</Link>
        <nav className="space-x-4">
          <Link to="/">{'Trang chủ'}</Link>
          <Link to="/kms">{'KMS'}</Link>
          <Link to="/datasets">{'Dữ liệu'}</Link>
          <Link to="/about">{'Giới thiệu'}</Link>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  )
}
