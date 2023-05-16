/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PlayMusic from './components/PlayMusic/PlayMusic';
import TrackPlayer from 'react-native-track-player';
import {playbackService} from './service';
import Playlist from './components/Playlist/Playlist';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => playbackService);
