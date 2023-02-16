import Auth from './auth'
import Crypto from './crypto'
import Main from './main'
import Bank from './bank'
import Country from './country'
import KYC from './kyc'

export default ($axios) => ({
  auth: Auth($axios),
  crypto: Crypto($axios),
  main: Main($axios),
  bank: Bank($axios),
  country: Country($axios),
  kyc: KYC($axios)
})
