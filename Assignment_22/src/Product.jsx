import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ShimmerPostItem } from "react-shimmer-effects";
 

const Product = () => {
    const[isloading,Setloading]=useState(true)
    const[data,setData]= useState([])
    const fetchData=async()=>{
      try{
          const res=await axios.get("https://fakestoreapi.com/products");
          setData(res.data) 
          Setloading(false)

          console.log(res.data)    
      }
      catch(err){
          console.log(err)
      }
    };
  
    useEffect(()=>{
        setTimeout(()=>{
      fetchData()
        },2000)
},[])

return (
  <>
     <div className='2xl:container mx-auto'>
        <div className='w-[90%] mx-auto font-["poppins"] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {isloading ? (
            <>
             <ShimmerPostItem card title text  />
             <ShimmerPostItem card title text  />
             <ShimmerPostItem card title text  />
             <ShimmerPostItem card title text  />
             <ShimmerPostItem card title text  />
             <ShimmerPostItem card title text  />
            </>
          ) : (
            data.map((e) => (
              <Card
                key={e.id} // Ensure each card has a unique key
                image={e.image}
                title={e.title}
                price={e.price}
                description={e.description}
                rating={e.rating.rate}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

const Card=(props)=>{
    return(
      <>
      <div className='bg-white w-[250px] h-[300px] p-5 shadow-2xl rounded-xl m-2 flex flex-col justify-center items-center'>
     
      <img src={props.image} alt='Product_image' className='w-[125px] h-[175px] object-cover' />
      <p className='text-center font-semibold mt-2'>{props.title}</p>
      <p className='text-gray-600'>${props.price}</p>
      </div>
      </>
    )}

const Search=()=>{
  const [searchText, setSearchText] = useState(data); 
  const [filterdata,setFilterData]=useState(data)

  return (
    <div>
      <input type="text" placeholder="Enter ur name" className="bg-black" onChange={
            (e2)=>{
                setSearchText(e2.target.value)
            }}
            />
       <button onClick={()=>{
                const newsearch = data.filter((e)=>{
                  return e.name.includes(searchText);
                })
                setFilterData(newsearch)
              }} >Search</button>
      
              {filterdata.map((props, index) => {
                return (
                  <>
                    <div className='bg-white w-[250px] h-[300px] p-5 shadow-2xl rounded-xl m-2 flex flex-col justify-center items-center'>
      <img src={props.image} alt='Product_image' className='w-[125px] h-[175px] object-cover' />
      <p className='text-center font-semibold mt-2'>{props.title}</p>
      <p className='text-gray-600'>${props.price}</p>
      </div>
                  </>
                );
              })}
            </div>
  )
}

export default Product;
