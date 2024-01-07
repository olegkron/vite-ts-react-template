import { render } from '@testing-library/react'
import App from '../App' // Adjust the import path based on your project structure

describe('<App/> component', () => {
	test('renders without crashing', () => {
		const { container } = render(<App />)
		expect(container).toBeTruthy()
	})

	// Add any additional tests specific to your App component here
})
