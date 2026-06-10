import UserCard from "./components/UserCard"
import ajit from "./assets/ajit.jpg"


function App() {


  return (
  
     <>

    <UserCard name="Ajit Yadav" image={ajit} description="Software Engineer" style={{"border-radius": "10px"}}/>

     </>
  )
}

export default App
