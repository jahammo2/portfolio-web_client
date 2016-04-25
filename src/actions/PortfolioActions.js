export function projectsFetched(projects) {
  return {
    type: 'PROJECTS_FETCHED_SUCCESS',
    projects
  };
}

export function fetchProjects() {
  return function(dispatch) {
    fetch('http://localhost:3000/api/projects')
      .then(response => response.json())
      .then((response) => {
        // console.log("EHHH");
        console.log(response);
        dispatch(projectsFetched(response));
      });
  };
}
