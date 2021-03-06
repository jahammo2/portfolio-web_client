import { List } from 'immutable';

export function getColor (project, colorSets, color) {
  const colorSetId = project.getIn(['relationships', 'color_set', 'data', 'id']);
  const colorSet = colorSets.find((set) => {
    return set.get('id') === colorSetId;
  });

  if (colorSet) {
    return colorSet.getIn(['attributes', color]);
  }

  return 'white';
}

function findMatchingObject (projectRelationships, object) {
  return projectRelationships.find((projectRelationship) => {
    return object.get('id') === projectRelationship.get('id');
  });
}

function getMatchingObjects (projectRelationships, objects) {
  return objects.filter((object) => {
    return findMatchingObject(projectRelationships, object);
  });
}

function extractTitles (matchingObjects) {
  return matchingObjects.map((matchingObject) => {
    return matchingObject.getIn(['attributes', 'title']);
  });
}

export function getIncludedObjectTitles (project, objects, relationship) {
  const projectDevices = project.getIn(['relationships', relationship, 'data']) || new List([]);
  const matchingDevices = getMatchingObjects(projectDevices, objects);

  return extractTitles(matchingDevices);
}

export function getIncludedObjects (project, objects, relationship) {
  const projectDevices = project.getIn(['relationships', relationship, 'data']) || new List([]);
  const matchingDevices = getMatchingObjects(projectDevices, objects);

  return matchingDevices;
}

export function getSisterProject (sisterIndex, projects, currentProject) {
  const projectIds = projects.map((project) => {
    return project.get('id');
  });
  const projectIndex = projectIds.indexOf(currentProject.get('id'));
  const newIndex = projectIndex + sisterIndex;

  if (newIndex === projects.size) {
    return projects.get(0);
  }

  return projects.get(newIndex);
}

export function getHighProjectAmountStyleOverrides (projects, extraOverrides) {
  const desktopDisplay = window.innerWidth > 599;

  if (!desktopDisplay) return null;
  if (projects.size < 11) return null;

  return {
    paddingTop: '50px',
    ...extraOverrides
  };
}
