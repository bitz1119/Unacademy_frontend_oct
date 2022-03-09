let x = [1,2,3,0,0.5]
let y = [2,3,4,1,0.5]
k = 2;

// make points array -- [[],[],[]] -- O(n)
let points = []
for(let i=0;i<x.length;i++){
    points.push([x[i],y[i]])
}

// sort them based on distance -- O(nlog(n))
points.sort(compare);

// take initial k points -- O(n)
console.log(points.slice(0,k))

// O(n) + O(nlogn) + O(n) ==> O(nlogn)

// take initial k points
function dis(point){
    return Math.sqrt(point[0]*point[0] + point[1]*point[1]);
}

function compare(a,b){
    return dis(a)-dis(b);
}
