"use client"
import { SectionOrder } from "@/lib/features/resume/utils"
import { useAppSelector } from "@/lib/hooks"
import EmploymentsViewer from "./Employments";
import PersonalDetailsViewer from "./PersonalDetails";
import TechnicalSkillsViewer from "./TechnicalSkills";

function SectionViewer({ order }: {
  order: SectionOrder
}) {
  const section = useAppSelector(state => state[order?.type]?.find(item => item?.id === order?.id));

  if (!section) return null

  switch (order.type) {
    case 'employments':
      return <EmploymentsViewer id={order.id} />
    case 'technicalSkills':
      return <TechnicalSkillsViewer id={order.id} />
    case 'personalDetails':
      return <PersonalDetailsViewer id={order.id} />
    default:
      return null
  }

}
export default SectionViewer