import React, { type ReactNode } from 'react'
import { type SwipeableProps, useSwipeable } from 'react-swipeable'

type SwipeWrapperProps = {
  children: ReactNode
  swipeProps: Partial<SwipeableProps>
}

export const SwipeWrapper = ({ children, swipeProps }: SwipeWrapperProps) => {
  const handlers = useSwipeable(swipeProps)
  return <div {...handlers}>{children}</div>
}
