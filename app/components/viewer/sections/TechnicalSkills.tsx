import { useAppSelector } from "@/lib/hooks"

function TechnicalSkillsViewer({ id }: { id: string }) {
  const employments = useAppSelector(state => state.technicalSkills.find(employment => employment.id === id))

  if (!employments) return null
  return (
    <div>EmploymentsViewer</div>
  )
}
export default TechnicalSkillsViewer