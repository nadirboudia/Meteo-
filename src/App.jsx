import { createTheme , ThemeProvider } from '@mui/material'
import './App.css'
import Test from './Test' 
import Container from '@mui/material/Container';


const theme = createTheme({
   typography:{
    fontFamily:["ibm"]
   }
})

function App() {
 

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
      <Container  maxWidth="sm" className='container'>
      <Test />
    </Container>
       
      </div>
    </ThemeProvider>
 
  )
}

export default App
