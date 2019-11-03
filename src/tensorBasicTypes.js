import tf from "@tensorflow/tfjs-core";

// enable a simple tensor
tf.tensor([1, 2, 3, 4]).print();

/**
 * Tensor abierto que puede tener una forma y un tipo.
 * 1er argumento es el valor del tensor
 * 2do argumento es la forma que adqueire nuestro valor
 * Ejemplo:
 * Matriz de 2 columnas por 3 filas
 */
tf.tensor([1, 2, 3, 4, 5, 6], [2, 3]).print();

/**
 * Tensor de 1 dimension
 */
tf.tensor1d([1, 2, 4]).print();

/**
 * Tensor de 2 dimensiones
 */
tf.tensor2d([1, 2, 3, 4], [2, 2]).print();

/**
 * Tensor de 3 dimensiones
 */

const valueTensor3D = [];
for (let i = 0, len = 30; i < len; i++) {
  valueTensor3D[i] = Math.random(0, 100);
}

tf.tensor3d(valueTensor3D, [5, 3, 2]).print();
