import { Instance, types } from 'mobx-state-tree';

const TaskStore = types
  .model('TaskStore', {
  name: types.string,
  done: types.optional(types.boolean, false),
  })
  .actions((self) => {

    function toggle () {
      self.done = !self.done;
    }

    return { toggle };
  });

export interface ITaskStore extends Instance<typeof TaskStore> {}

export default TaskStore;