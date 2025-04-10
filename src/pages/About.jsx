import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6">About OpenDevelopment Clone</h1>
          <div className="prose">
            <p className="mb-4">
              This is a demonstration frontend for a data portal, inspired by OpenDevelopment Mekong.
              It showcases how a Dataverse UI could be implemented with React and Tailwind CSS.
            </p>
            <p className="mb-4">
              The project is built using modern web technologies including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>ReactJS with functional components and hooks</li>
              <li>TailwindCSS for styling</li>
              <li>React Router for navigation</li>
              <li>Vite as the build tool</li>
            </ul>
            <p>
              This is a frontend-only implementation using mock data. In a real application,
              it would connect to a backend API to fetch actual datasets.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
