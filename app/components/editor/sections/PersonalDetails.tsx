import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { deletePersonalDetail, updateAdditionalInfo, updatePersonalDetail } from '@/lib/features/resume/personalDetailsSlice';
import { personalDetailsSchema } from '@/lib/schema';
import { RootState } from '@/lib/store';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { z } from 'zod';
import { RichtextEditor } from '../../richtext';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Label } from '@/components/ui/label';
import { removeSection } from '@/lib/features/resume/sectionOrderSlice';
import { openDialog, closeDialog } from '@/lib/features/dialog/dialogSlice';
import { deleteEmployment } from '@/lib/features/resume/employmentsSlice';


function PersonalDetails({ id }: { id: string }) {
  const dispatch = useDispatch();
  const personalDetail = useSelector((state: RootState) =>
    state.personalDetails.find(detail => detail.id === id)
  );

  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!personalDetail) return null;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, isAdditionalInfo = false) => {
    const { name, value } = e.target;
    if (isAdditionalInfo)
      return dispatch(updateAdditionalInfo({ [name]: value, id, }));
    else return dispatch(updatePersonalDetail({ [name]: value, id }));
  };


  const validate = () => {
    try {
      personalDetailsSchema.parse(personalDetail);
      setErrors({});
      return true;
    } catch (e) {
      if (e instanceof z.ZodError) {
        const newErrors: { [key: string]: string } = {};
        e.errors.forEach(error => {
          if (error.path.length > 0) {
            newErrors[error.path[0]] = error.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  function deleteSectionHandler() {
    dispatch(openDialog({
      description: 'Are you sure you want to delete this section?',
      title: 'Delete Employment',
      actionText: 'Delete',
      cancelText: 'Cancel',
      onContinue: () => {
        dispatch(removeSection(id));
        dispatch(deletePersonalDetail(id))
      },
      onCancel: () => dispatch(closeDialog())
    }))
  }


  return (
    <section className='px-1'>
      <header className='flex items-center gap-2 mt-6 mb-2 h-20'>
        <Icon icon="icon-park-outline:drag" />
        <input className="text-2xl p-4 outline:border-none font-semibold tracking-tight border-none w-full" value={personalDetail?.sectionName} onChange={(e) => {
          dispatch(updatePersonalDetail({ "sectionName": e.target.value, id }))
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

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label className='inline-block mb-1'>First Name</Label>
          <Input name="firstName" value={personalDetail.firstName} onChange={handleChange} />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div>
          <Label className='inline-block mb-1'>Last Name</Label>
          <Input name="lastName" value={personalDetail.lastName} onChange={handleChange} />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>
        <div>
          <Label className='inline-block mb-1'>Email</Label>
          <Input name="email" value={personalDetail.email} onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <Label className='inline-block mb-1'>Phone</Label>
          <Input name="phone" value={personalDetail.phone} onChange={handleChange} />
          {errors.phone && <p>{errors.phone}</p>}
        </div>
        <div>
          <Label className='inline-block mb-1'>Country</Label>
          <Input name="country" value={personalDetail.country} onChange={handleChange} />
          {errors.country && <p>{errors.country}</p>}
        </div>
        <div>
          <Label className='inline-block mb-1'>City</Label>
          <Input name="city" value={personalDetail.city} onChange={handleChange} />
          {errors.city && <p>{errors.city}</p>}
        </div>
        <div>
          <Label className='inline-block mb-1'>Job Title</Label>
          <Input name="jobTitle" value={personalDetail.jobTitle} onChange={handleChange} />
          {errors.jobTitle && <p>{errors.jobTitle}</p>}
        </div>

        <div className='block w-full grid-cols-subgrid md:col-span-2'>

          <Button type='button' className=' justify-start  text-start hover:no-underline p-0 m-0' variant="link" onClick={() => setShowAdditionalInfo(prev => {
            return !prev
          })}>Edit additional details <Icon icon="mdi:menu-swap-outline" /></Button>
        </div>

        {showAdditionalInfo ? (
          <>
            <div>
              <Label className='inline-block mb-1'>Address</Label>
              <Input name="address" value={personalDetail?.additionalInfo?.address} onChange={e => handleChange(e, true)} />
            </div>
            <div>
              <Label className='inline-block mb-1'>Postal Code</Label>
              <Input name="postalCode" value={personalDetail?.additionalInfo?.postalCode} onChange={e => handleChange(e, true)} />
            </div>
            <div>
              <Label className='inline-block mb-1'>Driving License</Label>
              <Input name="drivingLicense" value={personalDetail?.additionalInfo?.drivingLicense} onChange={e => handleChange(e, true)} />
            </div>
            <div>
              <Label className='inline-block mb-1'>Nationality</Label>
              <Input name="nationality" value={personalDetail?.additionalInfo?.nationality} onChange={e => handleChange(e, true)} />
            </div>
            <div>
              <Label className='inline-block mb-1'>Place of Birth</Label>
              <Input name="placeOfBirth" value={personalDetail?.additionalInfo?.placeOfBirth} onChange={e => handleChange(e, true)} />
            </div>
            <div>
              <Label className='inline-block mb-1'>Date of Birth</Label>
              <Input name="dateOfBirth" value={personalDetail?.additionalInfo?.dateOfBirth} onChange={e => handleChange(e, true)} />
            </div>
          </>
        ) : null}

        <div className="col-span-2">
          <Label className='inline-block mb-1'>Summary</Label>
          <RichtextEditor
            label="Summary"
            value={personalDetail.summary}
            onChange={change => {
              dispatch(updatePersonalDetail({ "summary": change, id }))
            }}
            name="summary"
          />
        </div>

      </form>
    </section>
  );
}

export default PersonalDetails;