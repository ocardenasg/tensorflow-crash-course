import * as tf from "@tensorflow/tfjs-core";

// enable a simple tensor
console.log(tf.tensor([1, 2, 3, 4]));

/* 
  Create a tensor with shape of matrix:
  - 2 columns
  - 3 rows
*/
console.log(tf.tensor([1, 2, 3, 4, 5, 6], [2, 3]));
