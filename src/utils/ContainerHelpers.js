export function getColor (project, colorSets, color) {
  const colorSetId = project.getIn(['relationships', 'color_set', 'data', 'id']);
  const colorSet = colorSets.find((entry) => {
    return entry.get('id') === colorSetId;
  });

  if (colorSet) {
    return colorSet.getIn(['attributes', color]);
  }

  return 'white';
}
