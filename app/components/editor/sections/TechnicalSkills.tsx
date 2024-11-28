import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { closeDialog, openDialog } from '@/lib/features/dialog/dialogSlice';
import { addTechnicalSkill, deleteTechnicalSkill, deleteTechnicalSkillsSection, updateTechnicalSkill, updateTechnicalSkillsSectionName } from '@/lib/features/resume/technicalSkillsSlice';
import { TechnicalSkill } from '@/lib/features/resume/utils';
import { RootState } from '@/lib/store';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Icon } from '@iconify/react';
import { removeSection } from '@/lib/features/resume/sectionOrderSlice';

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

  const deleteSkillHandler = (skillId: string) => {

    dispatch(openDialog({
      description: 'Are you sure you want to delete this skill?',
      title: 'Delete Skill',
      actionText: 'Delete',
      cancelText: 'Cancel',
      onContinue: () => {
        dispatch(deleteTechnicalSkill({
          sectionId: id,
          skillId: skillId
        }))
      },
      onCancel: () => dispatch(closeDialog())
    }))
  };


  function deleteSectionHandler() {
    dispatch(openDialog({
      description: 'Are you sure you want to delete this section?',
      title: 'Delete Employment',
      actionText: 'Delete',
      cancelText: 'Cancel',
      onContinue: () => {
        dispatch(removeSection(id));
        dispatch(deleteTechnicalSkillsSection(id))
      },
      onCancel: () => dispatch(closeDialog())
    }))
  }

  if (!technicalSkills) return null

  return (
    <section className='px-1'>

      <header className='flex items-center gap-2 mt-6 mb-2'>
        <Icon icon="icon-park-outline:drag" />
        <input className="text-2xl p-4 outline:border-none font-semibold tracking-tight border-none" value={technicalSkills?.sectionName} onChange={(e) => {
          dispatch(updateTechnicalSkillsSectionName({
            name: e.target.value,
            sectionId: id
          }))
        }} />

        <DropdownMenu >
          <DropdownMenuTrigger className='ml-auto'><div className='p-4 hover:bg-slate-50'>
            <Icon icon="pepicons-pop:dots-y" />
          </div></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <DropdownMenuItem onClick={deleteSectionHandler}>Delete Section</DropdownMenuItem>
            </DropdownMenuLabel>

          </DropdownMenuContent>
        </DropdownMenu>

      </header>
      {technicalSkills.skills.map((skill, i) => (
        <div className='flex gap-2' key={skill.id}>
          <Accordion type="multiple" defaultChecked className='flex-1' defaultValue={["openByDefault"]} >
            <AccordionItem value={i === technicalSkills.skills?.length - 1 ? "openByDefault" : skill.id} >
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
          <Button variant="outline" onClick={() => deleteSkillHandler(skill.id)} className="mb-auto mt-2 border-none ">
            <Icon icon="mdi:trash-can-outline" color='rgb(2, 8, 23)' />
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