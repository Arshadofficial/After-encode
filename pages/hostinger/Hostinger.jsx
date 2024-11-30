import React from 'react'
import Header from '../../components/hostinger/header/Header'
import VisitLink from '../../components/hostinger/visitsite/VisitLink'
import OverAll from '../../components/hostinger/overall/OverAll'
import ProsCons from '../../components/hostinger/proscons/ProsCons'
import Reliable from '../../components/hostinger/reliable/Reliable'
import Pricing from '../../components/hostinger/pricing/Pricing'
import Security from '../../components/hostinger/security/Security'

export default function Hostinger() {
  return (
    <>
        <Header />
     <div className="md:mx-4">
      <VisitLink />
      <OverAll />
      </div>
      <ProsCons />
      <Reliable />
      <Pricing />
      <Security />
    </>
  )
}
