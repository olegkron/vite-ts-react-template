import { FC, ReactNode } from 'react'
import classNames from './AppScreen.module.pcss'

export interface AppScreenProps {
  children?: ReactNode | null
}

export const AppScreen: FC<AppScreenProps> = ({ children = {} }) => (
  <div className={classNames.container}>{children}</div>
)
