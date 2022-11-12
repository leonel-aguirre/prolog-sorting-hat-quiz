# TODO list for this project.

This file contains a list of the tasks that are expected to be completed in order to achieve the goal of the project.

### TODO List:

Tasks must be listed from highest to lowest priority, once a task is done it should be moved into the "completed tasks" list.

#### Knowledge base.

- [ ] 🔴 Collect the minimum information needed for the knowledge base (questions, answers, weights) and the relations needed between them.
- [ ] 🟡 Define the `normalize_weights` procedure in the knowledge base for transforming a given weight (using its answer identifier) into a value that is easier to handle and understand for the web app. Working implementation in javascript:

  ```js
  let weightsList = [
    [27.31307938, 25.92258493, -28.87112887, -22.21557617],
    [28.653864, -28.67894522, 26.97274135, -24.67312267],
    [-11.75519742, -10.92370078, -10.86606985, 35.83478687],
  ];

  // Should map the given set of weights to values between 0 and 1 for representing
  // percentages, if an input value is less or equal to 0 then the maped value will
  // always be 0, otherwise it will become the division between itself by the sum of
  // all the set of input values, after that it will get rounded to the nearest integer
  // and finally get divided by 100. The resulting set of values should always sum up to 1.
  const normalizeWeights = (weights) => {
    return weights
      .map((value) => (value <= 0 ? 0 : value))
      .map((value, _, list) =>
        value > 0 ? value / list.reduce((a, b) => a + b, 0) : value
      )
      .map((value) => Math.round(value * 100) / 100);
  };

  /*
  let normalizedWeights = weightList.map(normalizeWeights)
  
  normalizeWeights -> [
  	[0.51,  0.49,  0,  0]
  	[0.52,  0,  0.48,  0]
  	[0,  0,  0,  1]
  ]
  */
  ```

- [ ] 🟢 Update `README.md` file with latest project information.

#### Web App.

- [ ] 🟡 Initialize and config React app with bare minimum needs for it to work.
- [ ] 🟡 Test the **[Tau Prolog JavaScript Library](http://tau-prolog.org/)** and determine if it is the best tool for the project.

### Completed tasks:

- [x] Initialize git project.

### Priority order:

The elements in the TODO list must be classified with the following symbols based on its priority:

- 🔴 High priority.
- 🟡 Medium priority.
- 🟢 Low priority.
