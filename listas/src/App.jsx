import { Header } from './components/Header'
import { Alfabeto } from './components/Alfabeto'
import { Desordenada } from './components/Desordenada'
import { Ordenada } from './components/Ordenada'
import { Romanos } from './components/Romanos'

export function App() {
  return (
      <>
      <Header />
      <main>
        <Alfabeto />
        <Desordenada />
        <Ordenada />
        <Romanos />
      </main>
      </>
  );
}