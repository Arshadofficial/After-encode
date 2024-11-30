import React from 'react'
import Header from '../../components/bluehost/header/Header'
import VisitLink from '../../components/bluehost/visitsite/VisitLink'
import OverAll from '../../components/bluehost/overall/OverAll'
import ProsCons from '../../components/bluehost/proscons/ProsCons'
import Reliable from '../../components/bluehost/reliable/Reliable'
import HostingFeatures from '../../components/bluehost/hostingfeatures/HostingFeatures'

import Pricing from '../../components/bluehost/pricing/Pricing'
import Security from '../../components/bluehost/security/Security'
import Customer from '../../components/bluehost/customer/Customer'
import Faq from '../../components/bluehost/faq/Faq'



export default function Bluehost() {
  return (
   
    <>
    <Header />
    <div className="md:mx-4">
    <VisitLink  />
    <OverAll />
    </div>
    <ProsCons />
    <Reliable />
    <HostingFeatures/>
    <Pricing />
    <Security />
    <Customer />
    <Faq />
    </>
  
  )
}
