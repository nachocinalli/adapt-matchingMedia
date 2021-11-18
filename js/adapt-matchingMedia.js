import Adapt from 'core/js/adapt';
import MatchingMediaModel from './matchingMediaModel';
import MatchingMediaView from './matchingMediaView';

export default Adapt.register('matchingMedia', {
  model: MatchingMediaModel,
  view: MatchingMediaView
});
