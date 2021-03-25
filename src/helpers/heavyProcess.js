const heavyProcess = iterations => {
  for (let index = 0; index < iterations; index++) {
    console.log('here we go...');
  }
  return `iterations: ${iterations}`;
};

export default heavyProcess;
