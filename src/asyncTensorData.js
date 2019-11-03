import * as tf from "@tensorflow/tfjs-core";

async function getData() {
  const tensorValues = [];

  for (let i = 0, len = 30; i < len; i++) {
    tensorValues[i] = Math.random(0, 100);
  }

  const tensor = await tf.tensor(tensorValues, [5, 3, 2], "int32");
  const data = await tensor.data();

  console.log({ data });

  return data;
}

getData();
