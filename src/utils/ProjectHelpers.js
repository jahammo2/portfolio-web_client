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
