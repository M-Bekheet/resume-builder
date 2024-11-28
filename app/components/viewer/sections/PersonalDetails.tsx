// PersonalDetailsViewer.tsx
import React from 'react';
import { useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { Icon } from '@iconify/react';

function PersonalDetailsViewer({ id }: { id: string }) {
  const personalDetails = useAppSelector((state: RootState) =>
    state.personalDetails.find(detail => detail?.id === id)
  );

  if (!personalDetails) return null;

  return (
    <section className="p-4 col-span-2">
      <h1 className='text-4xl mb-2 font-bold'>{personalDetails?.sectionName || ""}</h1>
      <header>
        <h2 className="text-lg font-bold">
          {personalDetails.firstName} {personalDetails.lastName}
        </h2>
        <p className="text-lg">{personalDetails.jobTitle}</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <h3 className="text-md font-semibold">About Me</h3>
          <p dangerouslySetInnerHTML={{ __html: personalDetails.summary }} />
        </div>
        <div>
          <h3 className="text-md font-semibold">Contact Information</h3>
          <ul>
            <li className="flex items-center">
              <Icon icon="ic:baseline-email" className="mr-2" /> Email: {personalDetails.email}
            </li>
            <li className="flex items-center">
              <Icon icon="ic:baseline-phone" className="mr-2" /> Phone: {personalDetails.phone}
            </li>
            <li className="flex items-center">
              <Icon icon="ic:baseline-flag" className="mr-2" /> Country: {personalDetails.country}
            </li>
            <li className="flex items-center">
              <Icon icon="ic:baseline-location-city" className="mr-2" /> City: {personalDetails.city}
            </li>
            {personalDetails?.additionalInfo ? (
              <>
                {personalDetails?.additionalInfo?.address && (
                  <li className="flex items-center">
                    <Icon icon="ic:baseline-home" className="mr-2" /> Address: {personalDetails?.additionalInfo?.address}
                  </li>
                )}
                {personalDetails?.additionalInfo?.postalCode && (
                  <li className="flex items-center">
                    <Icon icon="ic:baseline-markunread-mailbox" className="mr-2" /> Postal Code: {personalDetails?.additionalInfo?.postalCode}
                  </li>
                )}
                {personalDetails?.additionalInfo?.drivingLicense && (
                  <li className="flex items-center">
                    <Icon icon="ic:baseline-directions-car" className="mr-2" /> Driving License: {personalDetails?.additionalInfo?.drivingLicense}
                  </li>
                )}
                {personalDetails?.additionalInfo?.nationality && (
                  <li className="flex items-center">
                    <Icon icon="ic:baseline-public" className="mr-2" /> Nationality: {personalDetails?.additionalInfo?.nationality}
                  </li>
                )}
                {personalDetails?.additionalInfo?.placeOfBirth && (
                  <li className="flex items-center">
                    <Icon icon="ic:baseline-location-on" className="mr-2" /> Place of Birth: {personalDetails?.additionalInfo?.placeOfBirth}
                  </li>
                )}
                {personalDetails?.additionalInfo?.dateOfBirth && (
                  <li className="flex items-center">
                    <Icon icon="ic:baseline-cake" className="mr-2" /> Date of Birth: {personalDetails?.additionalInfo?.dateOfBirth}
                  </li>
                )}
              </>
            ) : null}
          </ul>


        </div>
      </div>
    </section>
  );
}

export default PersonalDetailsViewer;