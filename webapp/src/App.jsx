import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <nav class="navbar fixed-top navbar-expand-md navbar-light bg-light">      

            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#sobre">Home<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#games">Serviços</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#social">Portfólio</a>
                </li>     
                <li class="nav-item">
                  <a class="nav-link" href="#games">Blog</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#games">Sobre Nós</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#games">Contato</a>
                </li>       
            </ul>

          </nav>
      </div>
      <p>Fazendo o HomePage</p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> 
    </>
  )
}

export default App
