import React from 'react'
import Api from '../api/api'


const Process = props => (
    
    <div>
    {
        Api.map(({img,name}) => 
            <>
            <h1>{img}</h1>
            <h2>{name}</h2>  
          
            </>
        )}
        
    
    </div>
    
    )


export default Process