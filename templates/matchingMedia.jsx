import Adapt from 'core/js/adapt';
import React from 'react';
import { templates, classes } from 'core/js/reactHelpers';

export default function MatchingMedia(props) {
  const {
    _isEnabled,
    _isInteractionComplete,
    _isCorrect,
    _canShowMarking,
    _isCorrectAnswerShown,
    _columns,
    _items,
    _options
  } = props;

  const displayAsCorrect = (_isInteractionComplete && (_isCorrectAnswerShown || _isCorrect));
  const hasColumns = _columns > 1;
  return (
    <div className="component__inner matching__inner">

      <templates.header {...props} />

      <div className={classes([
        'component__widget matching__widget',
        !_isEnabled && 'is-disabled',
        _isInteractionComplete && 'is-complete is-submitted show-user-answer',
        displayAsCorrect && 'is-correct',
        hasColumns && 'has-columns'
      ])}>

        {_items.map(({
          text,
          _media,
          _index
        }, index) => {
          const activeOption = _options.find(option => (option._itemIndex === _index) && option._isActive);
          const displayItemAsCorrect = (!_isEnabled && _canShowMarking && (_isCorrectAnswerShown || activeOption?._shouldBeSelected));
          return (
            <div key={_index} style={(hasColumns && Adapt.device.screenSize === 'large' && { width: `${100 / _columns}%` }) || null} className={classes([
              'matching-item',
              'item',
              `item-${index}`,
              'js-matching-item',
              displayItemAsCorrect ? 'is-correct' : 'is-incorrect'
            ])

            }>

              {text &&
              <div className="matching-item__title">
                <div className="matching-item__title_inner" dangerouslySetInnerHTML={{ __html: text }}>
                </div>
              </div>
              }
              {_media &&
                <div className="matching-item__media">
                  {_media.mp3 &&
                    <audio style="width: 100%" controls>
                      <source src="{{_media.mp3}}" type="audio/mp3">
                      </source>
                    </audio>
                  }
                  {_media.ogg &&
                    <audio style="width: 100%;" controls>
                      <source src="{{_media.ogg}}" type="audio/ogg">
                      </source>
                    </audio>
                  }
                  {_media.source &&
                  <video aria-hidden="true" preload="none" width="100%" height="100%" controls="controls"
                    poster={_media.poster}>
                    {_media.source && <source src={_media.source} type={_media.type} />}
                  </video>
                  }
                  {_media.mp4 &&
                      <video aria-hidden="true" preload="none" width="100%" height="100%" controls="controls"
                        poster={_media.poster}>
                        <source src={_media.mp4} type="video/mp4" />

                      </video>
                  }
                  {_media.ogv &&
                    <video aria-hidden="true" preload="none" width="100%" height="100%" controls="controls"
                      poster={_media.poster}>
                      <source src={_media.ogv} type="video/ogg" />
                    </video>
                  }
                  {_media.webm && <video aria-hidden="true" preload="none" width="100%" height="100%" controls="controls"
                    poster={_media.poster}>
                    <source src={_media.webm} type="video/webm" />
                  </video>
                  }

                </div>
              }
              <div className="matching-item__select-container js-matching-item-select-container">

                <templates.matchingDropDown {...props} _itemIndex={_index} />

                <div className="matching-item__select-state">
                  <div className="matching-item__select-icon matching-item__select-correct-icon">
                    <div className="icon"></div>
                  </div>
                  <div className="matching-item__select-icon matching-item__select-incorrect-icon">
                    <div className="icon"></div>
                  </div>
                </div>

              </div>

            </div>
          );
        })}

      </div>

      <div className="btn__container"></div>

    </div>
  );
}
