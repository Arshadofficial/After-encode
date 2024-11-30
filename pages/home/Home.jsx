import React from 'react'
import Comparison from '../../components/home/comparison/Comparison'
import Hosting from '../../components/home/tenlinks/Hosting'
import VisitCard from '../../components/home/tencards/VisitCard'
import Banner from '../../components/home/banner/Banner'
import Table from '../../components/home/table/Table'
import Faq from '../../components/home/faq/Faq'

export default function Home() {
  return (
    <>
  <div className="container-fluid">
   <Banner title="connect on" subtitle="your term" detail="We provide expert guidance for your online success" />
   <Comparison title=""  detail="Discovering the ideal web host for your website may seem daunting, but fret not, we've got you covered. After thorough investigation, we confidently endorse Bluehost as our top pick for web hosting. Bluehost stands out with the highest average rating, making it the undeniable winner. Boasting an impressive array of features, budget-friendly plans, and unmatched performance in dedicated hosting, Bluehost stands as the ultimate choice for you.." heading="Top 10 Web Hosting Providers 2023" />
   <Hosting title="The 10 best web hosting providers of 2023 are:" secTitle="Our Research Process" detail="Our research process ensures accurate and useful information on hosting providers, evaluating criteria like pricing, performance, features, support, and market analysis. We focus on popular hosting types, equipping you to make informed decisions" />
   <VisitCard /> 
   <Table />
   <Faq />

  </div>
   </>
  )
}
