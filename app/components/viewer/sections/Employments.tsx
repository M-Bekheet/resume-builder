import { useAppSelector } from "@/lib/hooks";
import { format } from "date-fns";

function EmploymentsViewer({ id }: { id: string }) {
  const employments = useAppSelector(state =>
    state.employments?.find(employment => employment?.id === id)
  );
  const purifiedEmployments = employments?.employments.filter(employment => !!employment?.company) || [];

  if (!employments || !purifiedEmployments?.length) return null;




  const formatDate = (date: string) => {
    const parsedDate = new Date(date);
    return isNaN(parsedDate.getTime()) ? '' : format(parsedDate, 'MMM yyyy');
  };

  return (
    <section className="p-4">
      <header>
        <h3 className="text-xl font-semibold">{employments.sectionName}</h3>
      </header>
      <ul className="mt-4 space-y-6">
        {purifiedEmployments.map((employment) => (
          <li key={employment.id} className="space-y-2">
            <h4 className="text-lg font-medium">{employment.jobTitle}</h4>
            <div>
              <p className="text-gray-700">{employment.company}</p>
              <p className="text-sm text-gray-600">
                {formatDate(employment.startDate)} - {' '}
                {employment.currentlyWorking ? 'Present' : formatDate(employment.endDate || "")}
              </p>
            </div>
            <div
              className="prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: employment.description }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default EmploymentsViewer;