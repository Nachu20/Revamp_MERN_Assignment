import React,{ useState } from 'react'

const Search = () => {  
  const [data,setData] = useState(dummyData)
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
      
              {filterdata.map((e, index) => {
                return (
                  <>
                    <div key={index}>
                      <p>{e.name}</p>
                    </div>
                  </>
                );
              })}
            </div>
  )
}
const dummyData = [
    {
      name: "ram",
    },
    {
      name: "ram",
    },
    {
      name: "sam",
    },
    {
      name: "dog",
    },
    {
      name: "car",
    },
    {
      name: "tea",
    },
  ];
export default Search;
