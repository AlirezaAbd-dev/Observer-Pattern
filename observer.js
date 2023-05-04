export const Observable = {
  observables: [],
  subscribe: function (func) {
    this.observables.push(func);
  },
  unsubscribe: function (func) {
    this.observables = this.observables.filter((obs) => obs !== func);
  },
  notify: function (data) {
    this.observables.forEach((func) => func(data));
  },
};
