import Player from '@vimeo/player';
import { throttle } from 'lodash';

const TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function (data) {
  const strigifyData = JSON.stringify(data);
  localStorage.setItem(TIME_KEY, strigifyData);
};
player.on('timeupdate', throttle(onPlay, 1000));

function resumePlayback() {
  const paused = JSON.parse(localStorage.getItem(TIME_KEY))['seconds'];
  player.setCurrentTime(paused || 0);
}
resumePlayback();
