import * as tf from "@tensorflow/tfjs-core";

export default function matMult() {
  // creacion de tensores de 2 dimensiones
  const matA = tf.tensor2d([[1, 2, -3], [4, 0, -2]]);
  const matB = tf.tensor2d([[3, 1], [2, 4], [-1, 5]]);

  /**
   * multiplicacion de tensores de dos dimensiones
   * (multiplicacion de matrices)
   */
  tf.matMul(matA, matB).print();

  // limpiar memeoria despues de usarlo
  matA.dispose();
  matB.dispose();
}
