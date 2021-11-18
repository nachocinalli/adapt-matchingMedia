import MatchingView from 'components/adapt-contrib-matching/js/matchingView';
import Adapt from 'core/js/adapt';

class MatchingMediaView extends MatchingView {

  onQuestionRendered() {
    this.setUpColumns();
    this.setUpDropdowns();
    this.$('.matching__item-media').imageready(() => this.setReadyStatus());
    this.listenTo(Adapt, {
      'device:resize': this.onDeviceResize
    });
  }

  onDeviceResize() {
    this.setUpColumns();
  }

  setUpColumns() {
    const columns = this.model.get('_columns');

    if (!columns) return;

    const isLarge = Adapt.device.screenSize === 'large';

    this.$el.toggleClass('has-column-layout', isLarge);
    this.$('.matching__item').css('width', isLarge ? (100 / columns) + '%' : '');
  }
}
MatchingMediaView.template = 'matching-media';

export default MatchingMediaView;
