import React from 'react'
import VisitSite from '../../components/godady/visiteSite/VisitSite'
import Header from '../../components/godady/header/Header'
import OverAll from '../../components/godady/overall/OverAll'
import ProsCons from '../../components/godady/proscons/ProsCons'
import HostingFeatures from '../../components/godady/hostingfeatures/HostingFeatures'
import Reliable from '../../components/godady/reliable/Reliable'
import GoDadyBrief from '../../components/godady/brief/GoDadyBrief'
import Pricing from '../../components/godady/pricing/Pricing'

export default function GoDaddy() {
  return (
    <>
    <Header />
    <div className="md:mx-4">
     <VisitSite />
     <OverAll />
    </div>
    <GoDadyBrief />
    <ProsCons />
    <Reliable />
    <HostingFeatures />
   <Pricing />
    </>
  )
}
