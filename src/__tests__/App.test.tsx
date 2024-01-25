import { render } from '@testing-library/react'

describe('<App/> component', () => {
	test('renders without crashing', () => {
		const { container } = render(<h4>Vite + React template</h4>)
		expect(container).toBeTruthy()
	})

	// Add any additional tests specific to your App component here
})
