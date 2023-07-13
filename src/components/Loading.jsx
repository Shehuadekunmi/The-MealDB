import React from 'react'
import { BallTriangle } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa92f"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </div>
    )
}

export default Loading