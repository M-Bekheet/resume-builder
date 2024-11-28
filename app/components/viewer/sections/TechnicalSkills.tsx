import { useAppSelector } from "@/lib/hooks";
import { Icon } from "@iconify/react";
import { RootState } from "@/lib/store";

function TechnicalSkillsViewer({ id }: { id: string }) {
  const technicalSkills = useAppSelector((state: RootState) =>
    state.technicalSkills.find(section => section.id === id)
  );

  const purifiedSkills = technicalSkills?.skills.filter(skill => skill?.skill?.trim() !== '') || [];

  if (
    !technicalSkills ||
    !(technicalSkills?.skills?.length > 0 && purifiedSkills?.length > 0)) return null;



  return (
    <section className="p-4">
      <header>
        <h3 className="text-xl font-semibold">{technicalSkills.sectionName}</h3>
      </header>
      <ul className="mt-4 w-full grid grid-cols-2 gap-x-2 gap-y-2">
        {purifiedSkills.map((skill) => (
          <li key={skill.id} className="contents">
            <span className="font-medium">{skill.skill}</span>
            <div className="flex gap-1 ml-auto">
              {getLevelDots(skill.level)}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}


const getLevelDots = (level: string) => {
  const levels = {
    'Novice': 1,
    'Beginner': 2,
    'Intermediate': 3,
    'Advanced': 4,
    'Expert': 5
  };

  const dots = [];
  const totalDots = 5;
  const filledDots = levels[level as keyof typeof levels] || 0;

  for (let i = 0; i < totalDots; i++) {
    dots.push(
      <Icon
        key={i}
        icon="material-symbols:circle"
        className={i < filledDots ? 'text-slate-700' : 'text-gray-300'}
        fontSize={12}
      />
    );
  }

  return dots;
};

export default TechnicalSkillsViewer;