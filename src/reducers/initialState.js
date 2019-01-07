import { List, Map } from 'immutable';

export default new Map({
  projects: new List([]),
  individualProject: new Map(),
  colorSets: new List([]),
  screenshots: new List([]),
  devices: new List([]),
  languages: new List([]),
  activeProject: new Map(),
  sideBarShowing: false,
  socialLinks: new List([]),
  bio: new Map()
});
