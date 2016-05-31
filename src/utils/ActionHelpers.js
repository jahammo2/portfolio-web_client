export function setActiveProject (projects, dispatch, projectActive) {
  const featuredProjects = projects.filter((project) => {
    return project.attributes.featured;
  });

  dispatch(projectActive(featuredProjects[0]));
}

export function getHost () {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000';
  }

  return 'https://162.243.114.222';
}
