import React from 'react'
import { PieChart, BarChart } from 'react-chartkick'
import 'chartkick/chart.js'
import { useSelector } from 'react-redux';

const Coechart = () => {
    const coeposts = useSelector( (state) => state.coeposts)

  return (
    <div>
    <PieChart data={[["Number of Students in COE", coeposts.length]]} />

    <BarChart data={[["Number of Students in COE", coeposts.length]]} />
    </div>
  )
}

export default Coechart