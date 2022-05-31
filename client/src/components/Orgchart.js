import React from 'react'
import { PieChart, BarChart } from 'react-chartkick'
import 'chartkick/chart.js'
import { useSelector } from 'react-redux';

const Orgchart = () => {
    const posts = useSelector( (state) => state.posts)

  return (
    <div>
    <PieChart data={[["Number of Organization", posts.length]]} />

    <BarChart data={[["Number of Number of Organisation", posts.length]]} />
    </div>
  )
}

export default Orgchart