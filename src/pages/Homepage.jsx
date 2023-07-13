import React from 'react'
import SearchForm from '../components/SearchForm'
import MealList from '../components/MealList'
import Banner from '../components/Banner'

const Homepage = () => {
  return (
    <div>
      <Banner/>
      <SearchForm/>
     <MealList/>
    </div>
  )
}

export default Homepage