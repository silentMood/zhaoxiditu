import { action, observable } from 'mobx';

class CounterStore {
  @observable count = 0;

  @action
  inc = () => {
    return (this.count += 1);
  };
}

export default new CounterStore();
