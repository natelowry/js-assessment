exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

    indexOf: function (arr, item) {
        return arr.indexOf(item);
    },

    sum: function (arr) {
        return arr.reduce(function (previousValue, currentValue) { return previousValue + currentValue; });
    },

    remove: function (arr, item) {
        return arr.filter(function (i) { return i !== item; });
    },

    removeWithoutCopy: function (arr, item) {
        for (var i; (i = arr.indexOf(item)) >= 0;) {
            arr.splice(i, 1);
        }
        return arr;
    },

    append: function (arr, item) {
        arr.push(item);
        return arr;
    },

    truncate: function (arr) {
        arr.pop();
        return arr;
    },

    prepend: function (arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail: function (arr) {
        arr.shift();
        return arr;
    },

    concat: function (arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert: function (arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count: function (arr, item) {
        return arr.filter(function (i) { return i === item; }).length;
    },

    duplicates: function (arr) {
        var ret = [];
        arr.reduce(function (previousValue, currentValue) {
            if (previousValue === currentValue) {
                ret.push(currentValue);
            }
            return currentValue;
        }, arr[0]);
        return ret;
    },

    square: function (arr) {
        return arr.map(function (item) { return Math.pow(item, 2); });
    },

    findAllOccurrences: function (arr, target) {
        var acc = [];
        arr.map(function (item, index) { if (item === target) acc.push(index); });
        return acc;
    }
};
