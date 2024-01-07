import { type FC } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import { AppScreen } from './components/screens/AppScreen/AppScreen'
import { Header } from './components/layout/Header/Header'

export interface NavigatorProps {}

export const Navigator: FC<NavigatorProps> = () => (
	<BrowserRouter>
		<AppScreen>
			<Header />
			<h4>Vite + React template</h4>
			<h5>Built with PostCss, Eslint, Prettier, Husky & Vitest</h5>
			<Routes>{/* <Route path="/" element={<HomeScreen />} /> */}</Routes>
		</AppScreen>
	</BrowserRouter>
)
