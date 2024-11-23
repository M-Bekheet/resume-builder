import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SectionOrder } from '@/lib/features/resume/utils';
import Certificates from './sections/Certificates';
import Educations from './sections/Educations';
import Employments from './sections/Employments';
import PersonalDetails from './sections/PersonalDetails';
import TechnicalSkills from './sections/TechnicalSkills';
import { RootState } from '@/lib/store';
import { reorderSection } from '@/lib/features/resume/sectionOrderSlice';

const ResumeBuilder = () => {
  const dispatch = useDispatch();
  const sectionsOrder = useSelector((state: RootState) => state.sectionsOrder);

  const handleReorder = (sectionId: string, newOrder: number) => {
    dispatch(reorderSection({
      id: sectionId,
      newIndex: newOrder,
    }));
  };

  {/* TODO: Add drag-and-drop functionality here to reorder sections */ }

  return (
    <div>
      {sectionsOrder.map(section => {
        switch (section.type) {
          case 'personalDetails':
            return <PersonalDetails key={section.id} id={section.id} />;
          case 'technicalSkills':
            return <TechnicalSkills key={section.id} id={section.id} />;
          case 'employments':
            return <Employments key={section.id} id={section.id} />;
          case 'certificates':
            return <Certificates key={section.id} id={section.id} />;
          case 'educations':
            return <Educations key={section.id} id={section.id} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ResumeBuilder;