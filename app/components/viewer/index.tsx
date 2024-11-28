"use client"
import { Button } from "@/components/ui/button"
import { useAppSelector } from "@/lib/hooks"
import { RootState } from "@/lib/store"
import SectionViewer from "./sections"

import styles from '../../styles/main.module.css'


function Viewer() {
  const sectionsOrder = useAppSelector((state: RootState) => state.sectionsOrder)

  return (
    <div className={styles.viewer}>
      <section className="printable grid grid-cols-2 bg-slate-50  pt-4 pb-8 px-6 rounded-md">
        {sectionsOrder?.map(order => <SectionViewer key={order?.id} order={order} />)}
      </section>
      <div className="w-full text-center mt-4">
        <Button type="submit">Download</Button>
      </div>
    </div>
  )
}
export default Viewer