import type * as TooltipProps from "@radix-ui/react-tooltip"
import * as TooltipRadix from "@radix-ui/react-tooltip"
interface TooltipProps {
  children: React.ReactNode
}
const Root = ({ children, ...rest }: TooltipProps.TooltipProviderProps) => {
  return (
    <TooltipRadix.Provider delayDuration={200} {...rest}>
      <TooltipRadix.Root>{children}</TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}

const Trigger = ({ children, ...rest }: TooltipProps.TooltipTriggerProps) => (
  <TooltipRadix.Trigger asChild {...rest}>
    {children}
  </TooltipRadix.Trigger>
)
const Content = ({ children, ...rest }: TooltipProps.TooltipContentProps) => (
  <TooltipRadix.Portal>
    <TooltipRadix.Content sideOffset={5} {...rest}>
      {children}
      <TooltipRadix.Arrow />
    </TooltipRadix.Content>
  </TooltipRadix.Portal>
)

export const Tooltip = {
  Root,
  Trigger,
  Content,
}
