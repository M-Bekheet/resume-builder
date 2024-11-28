import { SectionOrder } from '@/lib/features/resume/utils';
import { SortableItem } from '../drag-and-drop/Sortable';
import Certificates from '../sections/Certificates';
import Educations from '../sections/Educations';
import Employments from '../sections/Employments';
import PersonalDetails from '../sections/PersonalDetails';
import TechnicalSkills from '../sections/TechnicalSkills';



const EditorSection = ({ order }: { order: SectionOrder }) => {

  if (!order) return null;

  switch (order.type) {
    case 'personalDetails':
      return <SortableItem id={order?.id} ><PersonalDetails id={order.id} /></SortableItem>;
    case 'technicalSkills':
      return <SortableItem id={order?.id} ><TechnicalSkills id={order.id} /></SortableItem>;
    case 'employments':
      return <SortableItem id={order?.id} ><Employments id={order.id} /></SortableItem>;
    // case 'certificates':
    //   return <SortableItem id={order?.id} ><Certificates id={order.id} /></SortableItem>;
    // case 'educations':
    //   return <SortableItem id={order?.id} ><Educations id={order.id} /></SortableItem>;
    default:
      return null;
  }
}



export default EditorSection;