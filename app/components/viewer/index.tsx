"use client"
import { Button } from "@/components/ui/button"
import { useAppSelector } from "@/lib/hooks"
import { RootState } from "@/lib/store"
import SectionViewer from "./sections"

function Viewer() {
  const sectionsOrder = useAppSelector((state: RootState) => state.sectionsOrder)

  return (
    <div>
      <section className="printable">
        {sectionsOrder?.map(order => <SectionViewer key={order?.id} order={order} />)}
      </section>
      <Button type="submit">Download</Button>
    </div>
  )
}
export default Viewer