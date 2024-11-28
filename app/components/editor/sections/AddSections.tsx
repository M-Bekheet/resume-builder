// AddSections.tsx
import { Button } from "@/components/ui/button";
import { addEducationSection } from "@/lib/features/resume/educationSlice";
import { addEmploymentSection } from "@/lib/features/resume/employmentsSlice";
import { addPersonalDetailsSection } from "@/lib/features/resume/personalDetailsSlice";
import { addSection } from "@/lib/features/resume/sectionOrderSlice";
import { addSkillsSection } from "@/lib/features/resume/technicalSkillsSlice";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

function AddSections() {
  const dispatch = useDispatch();

  const sections = [
    {
      title: 'Personal Details',
      icon: 'mdi:account',
      action: () => {
        const id = uuidv4();
        dispatch(addPersonalDetailsSection(id));
        dispatch(addSection({
          id,
          type: 'personalDetails'
        }));
      }
    },
    {
      title: 'Technical Skills',
      icon: 'mdi:tools',
      action: () => {
        const id = uuidv4();
        dispatch(addSkillsSection(id));
        dispatch(addSection({
          id,
          type: 'technicalSkills'
        }));
      }
    },
    {
      title: 'Employment History',
      icon: 'mdi:briefcase',
      action: () => {
        const id = uuidv4();
        dispatch(addEmploymentSection(id));
        dispatch(addSection({
          id,
          type: 'employments'
        }));
      }
    },
    {
      title: 'Education',
      icon: 'mdi:school',
      action: () => {
        const id = uuidv4();
        dispatch(addEducationSection(id));
        dispatch(addSection({
          id,
          type: 'educations'
        }));
      }
    }
  ];

  return (
    <section className="mt-12 space-y-4">
      <header className="space-y-2">
        <h2 className="text-2xl font-bold">Add Sections</h2>
        <p className="text-gray-600">
          Add more sections to your resume by selecting from the options below.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sections.map((section) => (
          <Button
            key={section.title}
            onClick={section.action}
            variant="ghost"
            className="h-auto p-4 flex items-center gap-2 justify-start"
          >
            <Icon icon={section.icon} width={24} height={24} />
            <span>{section.title}</span>
          </Button>
        ))}
      </div>
    </section>
  );
}

export default AddSections;