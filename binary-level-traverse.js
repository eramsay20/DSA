// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/628/

var levelOrder = function (root) {
    // v2 recursive
    let results = [];

    const exploreTree = (rootNode, counter = 0, levels = {}) => {
        if (!rootNode) return levels
        counter++

        if (counter in levels) {
            levels[counter].push(rootNode.val)
        } else {
            levels[counter] = [rootNode.val]
        }

        if (rootNode.left) exploreTree(rootNode.left, counter, levels)
        if (rootNode.right) exploreTree(rootNode.right, counter, levels)
        return levels
    }

    const treeLevels = exploreTree(root);

    if (!treeLevels['1']) return []

    for (let level in treeLevels) {
        results[level - 1] = treeLevels[level]
    }

    return results;
};
