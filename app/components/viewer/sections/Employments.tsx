import { useAppSelector } from "@/lib/hooks"

function EmploymentsViewer({ id }: { id: string }) {
  const employments = useAppSelector(state => state.employments?.find(employment => employment?.id === id))

  if (!employments) return null
  return (
    <div>EmploymentsViewer</div>
  )
}
export default EmploymentsViewer