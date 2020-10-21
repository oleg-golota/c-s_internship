function getHierarchyRoots(flatSet) {
  const roots = [];
  for (let i = 0; i < flatSet.length; i += 1) {
    if (flatSet[i].depth > 1) {
      break;
    }
    roots.push(flatSet[i]);
  }
  return roots;
}

module.exports = (flatSet) => {
  const roots = getHierarchyRoots(flatSet);
  let depth = 2;
  let parentLevelStart = 0;
  let parentLevelEnd = roots.length;
  for (let i = roots.length; i < flatSet.length; i += 1) {
    if (flatSet[i].depth > depth) {
      depth += 1;
      parentLevelStart = parentLevelEnd;
      parentLevelEnd = i;
    }
    for (let k = parentLevelStart; k < parentLevelEnd; k += 1) {
      if (flatSet[k].id === flatSet[i].parentId) {
        // eslint-disable-next-line no-param-reassign
        flatSet[i].parent = flatSet[k];
        if (!flatSet[k].children) {
          // eslint-disable-next-line no-param-reassign
          flatSet[k].children = [];
        }
        flatSet[k].children.push(flatSet[i]);
      }
    }
  }
  return roots;
};
