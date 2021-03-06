import Ember from 'ember';
import { startOfDay } from '../helpers/start-of-day';
import { endOfDay } from '../helpers/end-of-day';

export default Ember.Component.extend({
  classNames: ['calendar-events-component'],
  title: "May 17th",
  start: null, // should be either a date or moment object
  end: null,   // should be either a date or moment object

  startOfDay: Ember.computed('start', function() {
    var start = this.get('start');

    return startOfDay(start);
  }),

  endOfDay: Ember.computed('end', function() {
    var end = this.get('end');

    return endOfDay(end);
  }),

  workoutEvents: Ember.computed('startOfDay', 'endOfDay',  function() {
    var start = this.get('startOfDay');
    var end = this.get('endOfDay');

    if (start && end) {
      console.log('finding workouts starting at ', start, ' and ending at ', end);
      return this.get('store').find('workout-event', { start: start.toDate(), end: end.toDate() });
    } else {
      return [];
    }
  }),

  actions: {
    add: function() {
      this.sendAction('on-add');
    }
  }
});
