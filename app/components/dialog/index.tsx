import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { closeDialog } from "@/lib/features/dialog/dialogSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"

function Dialog() {

  const {
    isOpen,
    title,
    description,
    cancelText,
    actionText,
    onContinue,
    onCancel
  } = useAppSelector(state => state.dialog)

  const dispatch = useAppDispatch()
  const closeDialogHandler = () => dispatch(closeDialog())


  return (
    <AlertDialog open={isOpen} onOpenChange={(_change) => closeDialogHandler()} >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => onCancel()} >
            {cancelText}
          </AlertDialogCancel>
          <AlertDialogAction onClick={() => onContinue()}>
            {actionText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
export default Dialog