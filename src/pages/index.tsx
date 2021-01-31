import { observer } from "mobx-react";
import TaskList from "../components/TaskList";
import { initializeStore } from "../stores";

const Home = observer(({ tasks }) => {
  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  );
});

export const getServerSideProps = async () => {
  const store = initializeStore();

  store.init();

  return {
    props: {
      tasks: store.tasks,
    },
  };
};

export default Home;
