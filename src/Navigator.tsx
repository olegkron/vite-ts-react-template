import { FC } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import { AppScreen } from './components/screens/AppScreen/AppScreen'
import { Header } from './components/layout/Header/Header'

export interface NavigatorProps {}

export const Navigator: FC<NavigatorProps> = () => (
  <BrowserRouter>
    <AppScreen>
      <Header />
      <h4>Vite + React + TS + PCSS + Storybook template</h4>
      <Routes>{/* <Route path="/" element={<HomeScreen />} /> */}</Routes>
    </AppScreen>
  </BrowserRouter>
)
