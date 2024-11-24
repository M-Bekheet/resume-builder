"use client"
import { reorderSection } from '@/lib/features/resume/sectionOrderSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import EditorSection from './sections';




function App() {
  const sectionsOrder = useAppSelector(state => state.sectionsOrder);
  const dispatch = useAppDispatch();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
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
  );


}

export default App;