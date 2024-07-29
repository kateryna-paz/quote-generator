import Lesson from "./lesson";
import reactCourse from "./reactCourse.json";

async function getAllCourses(): Promise<typeof reactCourse> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(reactCourse), 1000);
  });
}

export default async function Home() {
  const reactCourse = await getAllCourses();
  return (
    <main className="p-12">
      <h1 className="text-4xl text-center mb-6">{reactCourse.title}</h1>
      <ul className="bg-slate-900 p-8 rounded-2xl">
        {reactCourse.lessons.map((l) => {
          return <Lesson key={l.name} title={l.title} points={l.points} />;
        })}
      </ul>
    </main>
  );
}
