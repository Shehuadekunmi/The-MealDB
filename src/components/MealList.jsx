import React from 'react'
import { useGlobalContext } from '../hooks/context';
import Loading from '../components/Loading';
import { Link} from 'react-router-dom'


const MealList = () => {
  const { loading, foods } = useGlobalContext();

  if (loading) {
    return <Loading />
  }
  if (foods.length < 1) {
    return <h1>No food found</h1>
  }
  return (
<div className='container d-flex flex-wrap align-items-center justify-content-between '>
      {foods.map((food) => {
        const { id, name, image, cat, area } = food
        return     <Link to= {`/meal/${id}`} key={id} className='text-decoration-none my-3 mx-auto'>
        <div style={{ width: '280px' }}
          className=" shadow shadow-md card rounded-2 ">
          <img src={image} alt={name} className='rounded-top-2 w-100'/>
          <h4 className="text-success fw-bold text-center mt-3 "> {name} </h4>
<h5 className="text-scondary text-center fw-light">{cat}</h5>
<h5 className="text-scondary text-center fw-light">{area}</h5>
        </div>
        </Link>
      })}
    </div>
    
  )
}

export default MealList