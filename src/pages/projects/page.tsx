import { List } from './components/List';
import { Tab } from './components/Tab';

const ProjectsPage: React.FC = () => {
  return (
      <div className="mt-15 mx-2 h-full md:mx-8">
        <Tab />
        <div className="mb-2 w-full bg-white h-1 flex justify-end">
          <div className="w-1 h-1 bg-red-400" />
        </div>
        <List />
      </div>
  );
};

export default ProjectsPage;
