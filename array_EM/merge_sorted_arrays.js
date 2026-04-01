// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// var merge = function (nums1, m, nums2, n) {
//   let n1copy = nums1.slice(0, m);
//   let n1start = 0;
//   let n2start = 0;
//
//   for (let i = 0; i < m + n; i++) {
//     if (n2start >= n || (n1start < m && n1copy[n1start] <= nums2[n2start])) {
//       nums1[i] = n1copy[n1start];
//       n1start++;
//     } else {
//       nums1[i] = nums2[n2start];
//       n2start++;
//     }
//   }
//   return nums1;
// };
//


 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    //approach -2
    
    let p1 = m-1
    let p2 = n-1
    for(let i = (m+n)-1  ; i<=0;i--){
      if(p2<0)break;
      if(p1>=0&&nums1[p1]>=nums2[p2]){
        nums1[i] = nums1[p1]
        p1--
      }else{
        nums1[i] = nums2[p2]
        p2--
      }
    }
    return nums1
};
