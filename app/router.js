import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('events', { path: '/' });

  this.route('local-eats', function() {
    this.route('index');
    this.route('local-eats-check-in')
  });

  this.route('check-in');
  this.route('stop-watch');

  this.route('workout-builder', function() {
    // Workout List View
    this.route('index');

    // New Workout
    this.route('new');

    // Edit Workout (by workout id)
    this.route('edit', { path: ':workout_id/edit' });
  });
/*
  this.route('events', function() {
    this.route('edit', { path: ':event_id/edit' });
    this.route('new');
  });
*/
});
