import React from 'react'
import Header from '../../components/ionos/header/Header'
import VisitLink from '../../components/ionos/visitsite/VisitLink'
import OverAll from '../../components/ionos/overall/OverAll'
import ProsCons from '../../components/ionos/proscons/ProsCons'
import Performance from '../../components/ionos/performance/Performance'
import Features from '../../components/ionos/features/Features'
import Pricing from '../../components/ionos/pricing/Pricing'
import Competitors from '../../components/ionos/ionscompetitors/Competitors'

export default function Ionos() {
  return (
    <>
    <Header />
      <div className="md:mx-4">
        <VisitLink />
        <OverAll />
      </div>
      <ProsCons />
      <Performance />
      <Features />
      <Pricing />
      <Competitors />
    </>
  )
}
