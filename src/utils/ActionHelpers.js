export function setActiveProject (projects, dispatch, projectActive) {
  const featuredProjects = projects.filter((project) => {
    return project.attributes.featured;
  });

  dispatch(projectActive(featuredProjects[0]));
}
