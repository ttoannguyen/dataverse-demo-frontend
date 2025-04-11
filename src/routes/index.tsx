import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import KMS from '../pages/KMS'
import DatasetSearch from '../pages/DatasetSearch'

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/kms', element: <KMS /> },
  { path: '/datasets', element: <DatasetSearch /> },
])
