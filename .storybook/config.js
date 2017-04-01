import { configure } from '@kadira/storybook';

import '../public/css/index.css';
import 'leaflet/dist/leaflet.css';
import '../node_modules/semantic-ui-css/semantic.min.css';
import '../public/mapkey-icons/MapkeyIcons.css';
import '../public/mapkey-icons/L.Icon.Mapkey.css';

const componentsStories = require.context('../stories/', true, /.js$/);

function loadStories() {
  componentsStories.keys().forEach((filename) => componentsStories(filename));
}

configure(loadStories, module);
