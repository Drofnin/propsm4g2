import Button from './Button'
import Card from './card'


function App() {
  
/*text="loka" is a attribute to the componment, the text is a prop*/
  return (
    <>
     
     <Button buttonText="Close" isRed={true}/> <br/>
     
     <Button buttonText="Submit" isRed={false} /> 

     <Card date='24.10.2024' name='Alex' style={{}}/>
    
     <Card date='13.11.2024' name='Kalli' style={{}}/>

   

    </>
  )
}

export default App
