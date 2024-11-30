import React from 'react'
import Header from '../../components/hostgator/header/Header'
import OverAll from '../../components/hostgator/overall/OverAll'
import VisitSite from '../../components/hostgator/visiteSite/VisitSite'
import ProsCons from '../../components/hostgator/proscons/ProsCons'
import HostGatorBrief from '../../components/hostgator/brief/HostGatorBrief'
import UpTime from '../../components/hostgator/uptime/UpTime'
import Featurs from '../../components/hostgator/hostgatorfeatur/Featurs'
import Security from '../../components/hostgator/security/Security'

export default function Hostgator() {
  return (
    <>
    <Header />
     <div className="md:mx-4">
    <VisitSite />
     <OverAll />
     </div>
     <ProsCons />
     <HostGatorBrief />
     <UpTime />
     <Featurs />
     <Security />
    </>
  )
}
