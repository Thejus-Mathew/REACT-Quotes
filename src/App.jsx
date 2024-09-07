import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useEffect, useState } from 'react';
import { fetchQuotes } from './Redux/slice';

function App() {
  const dispatch = useDispatch()
  const {loading,quotes,error} = useSelector((state)=>state.quoteSlice)  


  useEffect(()=>{
    dispatch(fetchQuotes())
  },[])


  const[quote,setQuote] = useState('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut et cumque pariatur dicta sint ad eum eos quia, quod vel modi. Cupiditate adipisci dolorum, quo rerum iusto sunt error illum.')
  const[author,setAuthor] = useState('Author')

  useEffect(()=>{
    let num
    num = Math.floor(Math.random()*(quotes.length-1)) + 1
    let quo = quotes.find(item=>item.id==num)
    setQuote(quo?.quote)
    setAuthor(quo?.author)
    console.log(num);
  },[quotes])

  const shuffle = () => {
    dispatch(fetchQuotes())
  }




  return (
    <>

    {
      loading?
      <div className="home" style={{backgroundColor:"rgb(80,80,80)",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",color:"white",fontSize:"2vw"}}>
        Loading...
      </div>
      :
      <div className="home" style={{backgroundColor:"rgb(80,80,80)",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <div className="quote" style={{width:"80%", color:"white",paddingBottom:"3vw"}}>
        <div className="quoteStart" style={{fontSize:"10vw"}}>
          <i className="fa-solid fa-quote-left"></i>
        </div>
        <div className="quoteContent" style={{fontSize:"1.5vw",fontFamily:"cursive"}}>
          {quote}
        </div>
        <div className="quoteEnd" style={{fontSize:"8vw",display:"flex",justifyContent:"end",color:"orangered",alignItems:"center"}}>
          <div style={{width:"50%",display:"flex",justifyContent:"end",color:"orangered",alignItems:"center",position:"relative"}}>
            <div className="author" style={{color:"white",fontSize:"1.4vw",position:"absolute",left:"0",transformOrigin:"50% 50%"}}>
              -- <em>{author}</em> --
            </div>
            <i className="fa-solid fa-quote-right"></i>
          </div>
        </div>
      </div>
      <div className="next" style={{position:"absolute",top:"50px",right:"50px"}}>
        <button onClick={shuffle}>Next</button>
      </div>
    </div>
    
    }

    </>
  )
}

export default App
