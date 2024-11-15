
import { Company } from 'modules/profile/components/Company'
import { Navigation } from 'modules/profile/components/Navigation'
import { GeneralUserData } from 'modules/profile/components/GeneralUserData'

export default function Profile() {
  return <>
    <Navigation />
    <Company />
    <GeneralUserData />
  </>
}
