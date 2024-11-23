"use client";
import { changeCount, selectCount } from "@/lib/features/resume/resumeSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"

function Editor() {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)

  return (
    <div>
      <h1>Editor</h1>
      <input type="number" value={count} onChange={(e) => dispatch(changeCount(Number(e.target.value) || 0))} />
      <p>Current Count: {count}</p>
    </div>
  )
}
export default Editor