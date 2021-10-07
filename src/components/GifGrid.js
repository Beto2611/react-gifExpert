import React,{useState,useEffect} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs'
 import { GIfGripItem } from './GIfGripItem'

export const GifGrid = ({category}) => {
    // const [images, setImages] = useState([])
    const {data:images,loading}= useFetchGifs(category);
    // useEffect(()=>{
    //     getGifs(category).
    //     then(setImages)
    // }, [category])
 
    return (
        <>
        <h3>{category}</h3>
        {
            loading&& <p>Loading</p>
        }
        <div className="card-grid animate__animated animate__bounce animate__fadeInDown">
            

                {
                    images.map( img=>(
                       <GIfGripItem 
                       key={img.id}
                       {...img}
                       />
                    ))
                }
            
        </div>
        </>
    )
}
