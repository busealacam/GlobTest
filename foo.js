// La fonction prend une liste d'intervalle
// La return est une liste d'un ou des réunions d'intervalle et un ou dès intervalle tels quels
const foo = function(listintvl){
    let sortlistintvl = listintvl.sort((a,b) => a[0] - b[0]);
    let foolistintvl = [sortlistintvl.shift()];
    while(sortlistintvl.length != 0) {
        let leftintvl = foolistintvl.pop();
        let rightintvl = sortlistintvl.shift();
        if(leftintvl[1] >= rightintvl[0]) {
            foolistintvl.push([leftintvl[0], Math.max(leftintvl[1], rightintvl[1])]);
            
        }
        else {
            foolistintvl.push(leftintvl, rightintvl);
        }
    }
    return foolistintvl;
}

console.log("foo([[0, 3], [6, 10]]) ->", foo([[0, 3], [6, 10]]));
console.log("foo([[0, 5], [3, 10]]) ->", foo([[0, 5], [3, 10]]));
console.log("foo([[0, 5], [2, 4]]) ->", foo([[0, 5], [2, 4]]));
console.log("foo([[7, 8], [3, 6], [2, 4]]) ->", foo([[7, 8], [3, 6], [2, 4]]));
console.log("foo([[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]]) ->", foo([[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]]));
