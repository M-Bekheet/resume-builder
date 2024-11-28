import { useDispatch, useSelector } from 'react-redux';


import { addEmployment, deleteEmployment, removeEmploymentSection, updateEmployment } from '@/lib/features/resume/employmentsSlice';
import { Icon } from '@iconify/react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/datePicker';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { closeDialog, openDialog } from '@/lib/features/dialog/dialogSlice';
import { removeSection } from '@/lib/features/resume/sectionOrderSlice';
import { RootState } from '@/lib/store';
import { RichtextEditor } from '../../richtext';

function Employments({ id }: { id: string }) {
  const dispatch = useDispatch();
  const employments = useSelector((state: RootState) => state.employments?.find((employment) => employment.id === id)?.employments) || [];


  const handleChange = (employmentId: string, name: string, value: string | boolean) => {
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

  const deleteEmploymentHandler = (employmentId: string) => {

    dispatch(openDialog({
      description: 'Are you sure you want to delete this employment?',
      title: 'Delete Employment',
      actionText: 'Delete',
      cancelText: 'Cancel',
      onContinue: () => {
        dispatch(deleteEmployment({
          sectionId: id,
          employmentId
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
        dispatch(removeEmploymentSection(id))
      },
      onCancel: () => dispatch(closeDialog())
    }))
  }

  if (!employments) return null;

  return (
    <section className='px-1' >
      <header className='flex items-center gap-2 mt-6 mb-2'>
        <Icon icon="icon-park-outline:drag" />
        <h3 className="text-2xl p-4 outline:border-none font-semibold tracking-tight border-none">
          Employments
        </h3>

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
                    <Label className='block w-full mb-2'>Start Date</Label>
                    <DatePicker
                      date={new Date(employment.startDate)}
                      onSelect={(newDate) => handleChange(employment.id, 'startDate', newDate?.toISOString() || "")}
                      disabled={false}
                    />
                  </div>
                  <div>
                    <Label className='block w-full mb-2'>End Date</Label>
                    <DatePicker
                      date={employment.endDate ? new Date(employment.endDate) : undefined}
                      onSelect={(newDate) => handleChange(employment.id, 'endDate', newDate?.toISOString() || "")}
                      disabled={employment.currentlyWorking}
                    />
                  </div>
                  <div className='flex align-middle items-center gap-2'>
                    <Label className='font-semibold' >Currently working here</Label>
                    <Switch className='' checked={employment.currentlyWorking} onCheckedChange={(checked) => {
                      handleChange(employment.id, 'currentlyWorking',
                        checked)
                      if (checked) handleChange(employment.id, 'endDate', "")
                    }} />
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
          <Button variant="outline"
            onClick={() => deleteEmploymentHandler(employment.id)}
            className="mb-auto mt-2 border-none ">
            <Icon icon="mdi:trash-can-outline" color='rgb(2, 8, 23)' />
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