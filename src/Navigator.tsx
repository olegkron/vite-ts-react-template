import { FC } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import { AppScreen } from './components/screens/AppScreen'
import { Header } from './components/layout/Header'

export interface NavigatorProps {}

export const Navigator: FC<NavigatorProps> = () => {
  return (
    <BrowserRouter>
      <AppScreen>
        <Header />
        <Routes>{/*<Route path="/" element={<HomeScreen />} />*/}</Routes>
      </AppScreen>
    </BrowserRouter>
  )
}
