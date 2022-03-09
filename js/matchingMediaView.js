import MatchingView from 'components/adapt-contrib-matching/js/MatchingView';

class MatchingMediaView extends MatchingView {

  onQuestionRendered() {
    this.$('.matching-item__media').imageready(() => this.setReadyStatus());
  }

}
MatchingMediaView.template = 'matchingMedia.jsx';

export default MatchingMediaView;
