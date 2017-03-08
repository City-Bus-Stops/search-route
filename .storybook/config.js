import { configure } from '@kadira/storybook';

import '../semantic/dist/semantic.min.css';

function loadStories() {
  require('../stories/App');
  require('../stories/Login');
}
configure(loadStories, module);
