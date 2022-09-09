import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
    model() {
      return ['Test1', 'Test2', 'Test3'];
    }
  }