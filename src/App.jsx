
import { useState } from "react"




function App() {

 
   
  const [city , setCity] = useState('')
  const [dt, setdt] = useState({})
  const [main, setMain] = useState({})
  const [wind , setWind] = useState({})
  

  const changes = (e) => {
       setCity(e.target.value)
  }

  const clicker =  () => {

  async function dataFetch () {

   try{ const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=84f1aecc91e7887fe11337f9eeaf99a0&units=metric`)

    const data = await response.json()


    if( !response.ok){
      return;

       

      
    }

  

    console.log(data);

    setdt(data)
    setMain(data.main)
    setWind(data.wind)


  }




    catch(error){

        <h1> error </h1>
    }
  }
  dataFetch()

  }
  return ( 

    

    <div className='w-full h-screen bg-[#c4e4c4] grid place-items-center'>
      <div className='w-[340px] h-[400px] bg-[#31316d] rounded-lg ' >
        <div>
          <input 
          placeholder='Enter City' 
          className=' hover:w-[230px] duration-1000 w-[200px] rounded-2xl ml-2 border-none outline-none p-1.5 m-2' 
          type="text"
          onChange={changes}
          value={city}
          />
          <button 
          type="button" 
          className='rounded-2xl w-[70px] bg-white border-none outline-none text-center p-1.5 m-2 text-[15px]   active:bg-black active:text-black hover:duration-1000 hover:w-[80px]'
          onClick={() => clicker(city)}
          > Search </button>
        </div>

  
        <div>
                <h1 className='text-center text-3xl p-2 m-2 text-white font-bold'> {main.temp} °C</h1>
                <h3 className='name text-center text-2xl p-2 m-2 text-white font-medium'>{dt.name}</h3>
            </div>
            <div className='flex justify-around'>
                <div>
                    <h4 className='text-white p-1 m-2 font-semibold'>{main.humidity}%</h4>
                    <p className='text-white font-semibold'>Humidity</p>
                </div>
                <div>
                    <h4 className='text-white p-1 m-2 font-semibold'> {wind.speed}km/h</h4>
                    <p className='text-white font-semibold'>Wind Speed</p>
                </div>
            </div>

             

        


        


    
      </div> 
    </div>
  )
}

export default App
