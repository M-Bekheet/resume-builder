import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { addTechnicalSkill, deleteTechnicalSkill, updateTechnicalSkill } from '@/lib/features/resume/technicalSkillsSlice';
import { TechnicalSkill } from '@/lib/features/resume/utils';
import { RootState } from '@/lib/store';
import { Icon } from '@iconify/react';

function TechnicalSkills({ id }: { id: string }) {
  const dispatch = useDispatch();
  const sections = useSelector((state: RootState) => state.technicalSkills)
  const technicalSkills = sections?.find((sec) => sec.id === id);

  const handleChange = (payload: Partial<TechnicalSkill>) => {
    dispatch(updateTechnicalSkill({
      sectionId: id,
      skill: payload
    }));
  };

  const handleAddSkill = () => {
    const newSkill: TechnicalSkill = {
      id: uuidv4(),
      skill: '',
      level: 'Novice',
    };
    console.log({ newSkill })
    dispatch(addTechnicalSkill({ sectionId: id, skill: newSkill }));
  };

  const handleDeleteEmployment = (employmentId: string) => {
    dispatch(deleteTechnicalSkill({
      sectionId: id,
      skillId: employmentId
    }));
  };

  if (!technicalSkills) return null

  return (
    <section className='px-1'>
      <header className='flex items-center gap-2 mt-6 mb-2'>
        <Icon icon="icon-park-outline:drag" />
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
          Technical Skills
        </h3>
      </header>
      {technicalSkills.skills.map(skill => (
        <div className='flex gap-2' key={skill.id}>
          <Accordion type="multiple" className='flex-1'  >
            <AccordionItem value={skill.id}>
              <AccordionTrigger className='hover:no-underline'>{skill.skill || 'New Skill'}</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-1">
                  <div>
                    <Label className='inline-block mb-2'>Name</Label>
                    <Input
                      type="text"
                      value={skill.skill}
                      onChange={(e) => handleChange({ id: skill.id, skill: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label className='inline-block mb-2'>Level</Label>
                    <Select
                      value={skill.level}
                      onValueChange={(value) => handleChange({ id: skill.id, level: value as "Novice" | "Beginner" | "Intermediate" | "Advanced" | "Expert" })}
                    >
                      <SelectTrigger>{skill.level}</SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Novice">Novice</SelectItem>
                        <SelectItem value="Beginner">Beginner</SelectItem>
                        <SelectItem value="Intermediate">Intermediate</SelectItem>
                        <SelectItem value="Advanced">Advanced</SelectItem>
                        <SelectItem value="Expert">Expert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button variant="outline" onClick={() => handleDeleteEmployment(skill.id)} className="mt-4 border-none ">
            <Icon icon="mdi:trash-can-outline" color='#ff3b3b' />
          </Button>
        </div>
      ))}
      <Button
        type='button' className=' justify-start  text-start p-0 hover:no-underline border-none  hover:bg-transparent' variant="outline"
        onClick={handleAddSkill}>Add Skill</Button>
    </section>
  );
}

export default TechnicalSkills;