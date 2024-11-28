"use client"
import { reorderSection } from '@/lib/features/resume/sectionOrderSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  MouseSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import EditorSection from './sections';
import Dialog from '../dialog';
import AddSections from './sections/AddSections';




function App() {
  const sectionsOrder = useAppSelector(state => state.sectionsOrder);
  const dispatch = useAppDispatch();
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 20
      }
    }),
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      dispatch(reorderSection({
        id: active.id as string,
        newIndex: sectionsOrder?.findIndex(section => section.id === (over?.id ?? ""))
      }))
    }
  }

  return (
    <>
      <input type="text" onChange={(e) => { console.log(e.target.value) }} />

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={sectionsOrder}
          strategy={verticalListSortingStrategy}
        >
          {sectionsOrder?.map(order => <EditorSection key={order?.id} order={order} />)}
        </SortableContext>
      </DndContext>
      <AddSections />
      <Dialog />

    </>
  );


}

export default App;