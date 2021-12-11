function spiralTraversal(arr){
    let top = 0,left = 0,bottom =arr.length-1,right = arr[0].length-1;
    var dir = 0;
    let ans = [];
    while( top <= bottom && left<=right){
        if(dir == 0){
            for(let i = left;i<=right;i++){
                ans.push(arr[top][i]);
            }
            top++;
            dir++;
        }
        else if(dir == 1){
            for(let i = top;i<=bottom;i++){
                ans.push(arr[i][right]);
            }
            right--;
            dir++;
        }
        else if(dir == 2){
            for(let i = right;i>=left;i--){
                ans.push(arr[bottom][i]);
            }
            bottom--;
            dir++;
        }
        else if(dir == 3){
            for(let i = bottom;i>=top;i--){
                ans.push(arr[i][left]);
            }
            left++;
            dir++;
        }
        dir = dir%4;
    }

    return ans;
}


console.log(spiralTraversal([[1, 2, 3, 4],
                            [5, 6, 7, 8],
                            [9, 10, 11, 12]]));
