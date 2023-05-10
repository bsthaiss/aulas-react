import { Header } from './components/Header'
import { Inicio } from './components/Inicio'
import { Parte1 } from './components/Parte1'
import { Parte2 } from './components/Parte2'
import { Parte3 } from './components/Parte3'
import { Parte4 } from './components/Parte4'

export function App(){
  return (
    <>
    <Header />
    <main>
      <Inicio />
      <Parte1 />
      <Parte2 />
      <Parte3 />
      <Parte4 />
    </main>
    </>
  );
}