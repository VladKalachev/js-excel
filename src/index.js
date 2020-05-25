import {Router} from '@core/routes/Router'
import {DashboardPage} from '@/pages/DashboardPage'
import './scss/index.scss'

new Router('#app', {
  dashboard: DashboardPage
})
