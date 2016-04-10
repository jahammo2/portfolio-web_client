/*
 * Webpack loaders usually handle these file non-executable file types.
 * To allow the unit tests to run, set them up to return nothing when
 * they are required.
 */
const nullExtensions = ['.css', '.scss', '.sass', '.png', '.jpg'];

nullExtensions.forEach(function(extension) {
  require.extensions[extension] = function() {};
});
