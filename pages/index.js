import Image from 'next/image'
import { Inter } from 'next/font/google'
import TodoPage from './TodoPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <TodoPage/>
  )
}
