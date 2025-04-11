import { useTranslation } from 'react-i18next'
import { Card, CardContent } from '@/components/ui/card'

export default function KMS() {
  const { t } = useTranslation()

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">{t('kms.title')}</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">{t('kms.kpi.farmCount')}</h2>
            <p className="text-2xl font-bold text-green-600">120</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">{t('kms.kpi.totalArea')}</h2>
            <p className="text-2xl font-bold text-green-600">4500</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">{t('kms.kpi.avgYield')}</h2>
            <p className="text-2xl font-bold text-green-600">5.3</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">{t('kms.kpi.co2Saved')}</h2>
            <p className="text-2xl font-bold text-green-600">350</p>
          </CardContent>
        </Card>
      </div>

      {/* Map Placeholder */}
      <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">{t('kms.map.title')}</h2>
        <div className="h-96 bg-green-50 border rounded-lg flex items-center justify-center text-gray-400">
          [Bản đồ sẽ được tích hợp ở đây]
        </div>
      </div>
    </div>
  )
}
