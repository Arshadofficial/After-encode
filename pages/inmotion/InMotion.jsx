import React from 'react'
import Header from '../../components/inmotion/header/Header'
import OverAll from '../../components/inmotion/overall/OverAll'
import VisitLink from '../../components/inmotion/visitsite/VisitLink'
import ProsCons from '../../components/inmotion/proscons/ProsCons'
import Reliable from '../../components/inmotion/reliable/Reliable'
import Features from '../../components/inmotion/features/Features'
import Pricing from '../../components/inmotion/pricing/Pricing'

export default function InMotion() {
  return (
    <>
    <Header />
    <div className="md:mx-4">
    <VisitLink />
    <OverAll />
    </div>
    <ProsCons />
    <Reliable />
    <Features />
    <Pricing />
    </>
  )
}
