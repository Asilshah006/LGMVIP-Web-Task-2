import { useEffect, useState } from "react";
import Nav from "./Nav";
import Content from "./Content";
import Footer from "./Footer";

function App() {

 const [users, setusers] = useState([])

 const fetchItems= async ()=>{

  try{
    const response = await fetch('https://reqres.in/api/users') 
    const info = await response.json();
    console.log(info);
    setusers(info.data);
    console.log(users);
  }
  catch(err){
    console.log(err);
  }
}

 
  return (
    <div className="App">
     <Nav 
        title={'XYZ Company'}
        fetchItems = {fetchItems}
     />

     <Content 
      users = {users}
      />  

      <Footer/>
    </div>
  );
}

export default App;
