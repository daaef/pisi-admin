import Auth from './auth'
import Health from './health'
import Main from './main'
import Payment from './payment'
import Utils from './utils'
import Vehicle from './vehicle'

export default ($axios) => ({
  auth: Auth($axios),
  health: Health($axios),
  main: Main($axios),
  payment: Payment($axios),
  utils: Utils($axios),
  vehicle: Vehicle($axios)
})
