import { ReactNode,useCallback,useEffect } from "react"

export interface ToastDescription {
  title: string
  icon: ReactNode
  open: boolean
}

type ToastProps = {
  icon?: ReactNode
  text?: string
  showToast: ToastDescription
  setShowToast: React.Dispatch<React.SetStateAction<ToastDescription>>
}

export const Toast = ({ icon, text, setShowToast, showToast }: ToastProps) => {
  const deleteToast = useCallback(
    (showToast: ToastDescription) => {
      setShowToast({
        ...showToast,
        open: false,
      });
    },
    [showToast]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (showToast) {
        deleteToast(showToast)
      }
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [showToast, deleteToast])

  return (
    <>
      {showToast.open && (
        <div className="fixed bottom-[80px] left-[50%] flex w-full max-w-[17.813rem] translate-x-[-50%] animate-toast items-center justify-center gap-7 rounded-md bg-gray-900 px-7 py-4 text-xl text-yellow-100 shadow-xl">
          {icon}
          <p className="text-center">{text}</p>
        </div>
      )}
    </>
  )
}
