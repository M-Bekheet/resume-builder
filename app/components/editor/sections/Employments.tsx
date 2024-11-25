import { useDispatch, useSelector } from 'react-redux';


import { addEmployment, deleteEmployment, updateEmployment } from '@/lib/features/resume/employmentsSlice';
import { Icon } from '@iconify/react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/datePicker';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RootState } from '@/lib/store';
import { RichtextEditor } from '../../richtext';

function Employments({ id }: { id: string }) {
  const dispatch = useDispatch();
  const employments = useSelector((state: RootState) => state.employments?.find((employment) => employment.id === id)?.employments) || [];
  console.log({ employments })

  const handleChange = (employmentId: string, name: string, value: string) => {
    dispatch(updateEmployment({
      sectionId: id,
      employment: {
        id: employmentId,
        [name]: value
      }
    }));
  };

  const handleAddEmployment = () => {
    const newEmployment = {
      id: Date.now().toString(),
      jobTitle: '',
      company: '',
      startDate: '',
      endDate: '',
      currentlyWorking: false,
      description: '',
    };
    dispatch(addEmployment({
      sectionId: id,
      employment: newEmployment
    }));
  };

  const handleDeleteEmployment = (employmentId: string) => {
    dispatch(deleteEmployment({
      sectionId: id,
      employmentId
    }));
  };

  if (!employments) return null;

  return (
    <section className='px-1' >
      <header className='flex items-center gap-2 mt-6 mb-2'>
        <Icon icon="icon-park-outline:drag" />
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Employments
        </h3>
      </header>


      {employments.map(employment => (
        <div className='flex gap-2' key={employment.id} >
          <Accordion type="multiple" className='flex-1 '>
            <AccordionItem value={employment.id}>
              <AccordionTrigger className='hover:no-underline'>
                <div className="flex justify-between items-center">
                  <span>{employment.jobTitle || 'New Employment'}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent  >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-1">
                  <div>
                    <Label className='inline-block mb-2'>Job Title</Label>
                    <Input
                      type="text"
                      value={employment.jobTitle}
                      onChange={(e) => handleChange(employment.id, 'jobTitle', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label className='inline-block mb-2'>Company</Label>
                    <Input
                      type="text"
                      value={employment.company}
                      onChange={(e) => handleChange(employment.id, 'company', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label className='inline-block mb-2'>Start Date</Label>
                    <DatePicker
                      date={new Date(employment.startDate)}
                      onSelect={(newDate) => handleChange(employment.id, 'startDate', newDate?.toISOString() || "")}
                    />
                  </div>
                  <div>
                    <Label className='inline-block mb-2'>End Date</Label>
                    <Input
                      type="date"
                      value={employment.endDate}
                      onChange={(e) => handleChange(employment.id, 'endDate', e.target.value)}
                      disabled={employment.currentlyWorking}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label className='inline-block mb-2'>Description</Label>
                    <RichtextEditor
                      label='Description'
                      name='description'
                      value={employment.description}
                      onChange={(value) => handleChange(employment.id, 'description', value)}
                    />
                  </div>
                </div>

              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button variant="outline" onClick={() => handleDeleteEmployment(employment.id)} className="mt-4 border-none ">
            <Icon icon="mdi:trash-can-outline" color='#ff3b3b' />
          </Button>
        </div>
      ))}
      <Button
        type='button' className=' justify-start  text-start p-0 hover:no-underline border-none  hover:bg-transparent' variant="outline"
        onClick={handleAddEmployment}>Add Employment</Button>
    </section>
  );
}

export default Employments;