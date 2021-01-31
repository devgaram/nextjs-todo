import { applySnapshot, Instance, types } from 'mobx-state-tree'
import { useMemo } from 'react';
import { getAllTasks } from '../apis';
import TaskStore, { ITaskStore } from './TaskStore';

let store;

const Store = types
  .model({
    tasks: types.optional(types.array(TaskStore), []),
  })
  .actions((self) => ({

    addTask(name) {
      self.tasks.push(TaskStore.create({ name }));
    },

    init() {
      const tasks = getAllTasks();
      self.tasks.push(...tasks);
    }
  }));

export interface IStore extends Instance<typeof Store> {}
/**
 * Next.js 의 getStaticProps 는 모든 클라이언트 요청에 같은 데이터를 페이지 prop에 리턴한다.
 * 이를 SSG, Static Site Generation 라고 한다.
 * 이 메소드는 빌드 타임에만 실행된다.
 * 
 * Next.js 의 getStaticProps 는 클라이언트 요청에 매번 다른 데이터를 리턴한다.
 * 
 * 서버에서는 매번 스토어를 생성하려하며 클라이언트에서는 항상 같은 스토어를 사용하고자 한다.
 * 이러한 클라이언트, 서버의 분리된 mobx 사용 케이스에 대응하기 위해 아래와 같이 스토어를 생성한다.
 * 
 */

export function initializeStore(snapshot = null): IStore {
  const _store = store ?? Store.create({ tasks: [] });

  // 이 코드의 의미는 잘 모르겠음...
  if (snapshot) {
    applySnapshot(_store, snapshot);
  }

  // 서버일 때, ssg(static site), ssr(server side)일 때, 항상 새로운 스토어 생성하기 위함.
  if (typeof window === 'undefined') return _store;
  // 클라이언트에선 딱 한번만 스토어를 생성
  if (!store) store = _store;

  return store;

}

export function useStore(initialState): IStore {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store;
}