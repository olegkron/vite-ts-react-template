import { type FC, type ReactNode } from 'react'

export interface HeaderProps {
	children?: ReactNode
}

export const Header: FC<HeaderProps> = ({ children }) => <header>{children}</header>
