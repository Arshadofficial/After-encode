import React from 'react'
import Header from '../../components/dreamhost/header/Header'
import VisitLink from '../../components/dreamhost/visitsite/VisitLink'
import OverAll from '../../components/dreamhost/overall/OverAll'
import ProsCons from '../../components/dreamhost/proscons/ProsCons'
import EaseUse from '../../components/dreamhost/easeofuse/EaseUse'
import UpTime from '../../components/dreamhost/uptime/UpTime'
import Features from '../../components/dreamhost/features/Features'
import Pricing from '../../components/dreamhost/pricing/Pricing'

export default function Dreamhost() {
  return (
    <>
    <Header />
    <div className="md:mx-4">
       <VisitLink />
       <OverAll />
    </div>
    <ProsCons />
    <EaseUse />
    <UpTime />
    <Features />
    <Pricing />
    </>
  )
}
