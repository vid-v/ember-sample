import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
 this.route('map');
 this.route('planTrip');
 this.route('bookTicket');
 this.route('tracking');
this.route('feedback');
         
 this.route('login');
 this.route('signup');
});
export default Router;
