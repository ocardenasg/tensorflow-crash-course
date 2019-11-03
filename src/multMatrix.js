import * as tf from "@tensorflow/tfjs-core";

export default async function matMult() {
  // crea variable de tensor
  const matrixVariable = tf.variable([[1, 2, -3], [4, 0, -2]]);
  matrixVariable.print();

  // creacion de tensores de 2 dimensiones
  const matA = tf.tensor2d(matrixVariable);
  const matB = tf.tensor2d([[3, 1], [2, 4], [-1, 5]]);

  // multiplicacion de tensores de dos dimensiones
  // (multiplicacion de matrices)
  tf.matMul(matA, matB).print();
}
