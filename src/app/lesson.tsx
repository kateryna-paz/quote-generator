type LessonProps = {
  title: string;
  points?: string[];
};

export default function Lesson({ title, points }: LessonProps) {
  return (
    <li className="p-6 mb-4 border-2 border-slate-300 rounded-lg">
      <h3 className="text-2xl mb-4 underline underline-offset-4">{title}</h3>
      <ul className="ml-4 list-disc list ">
        {points?.map((point) => {
          return (
            <li className="list-item mb-1" key={point}>
              {point}
            </li>
          );
        })}
      </ul>
    </li>
  );
}
