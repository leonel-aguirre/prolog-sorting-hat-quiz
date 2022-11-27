# TODO list for this project.

This file contains a list of the tasks that are expected to be completed in order to achieve the goal of the project.

### TODO List:

Tasks must be listed from highest to lowest priority, once a task is done it should be moved into the "completed tasks" list.

#### Knowledge base.

😸✅ List is currently Empty ✅😸

#### Web App.

😸✅ List is currently Empty ✅😸

#### General.

😸✅ List is currently Empty ✅😸

### Completed tasks:

- [x] Initialize git project.
- [x] Refactor the wording **"answer"** used along the knowledge base and use **"option"** instead. Example: `option(o1, "...")` instead of `answer(a1, "...")` and `question_options(q1, [o1, o2, o3, o4])` instead of `question_answers(q1, [a1, a2, a3, a4])`.
- [x] Collect the minimum information needed for the knowledge base (questions, options, weights) and the relations needed between them, add the corresponding facts into `knowledgeBase.pl` file.
  - [x] Add facts for the categories `question`, `option` and `weights`, `question` and `option` having unique identifiers and `weights` using the same identifier as their corresponding option.
  - [x] Add a set of `question_option` facts that relates each question id with its corresponding set of option ids in a list. Example: `question_option(q1, [o1, o2, o3, o4])`.
- [x] Initialize and config React app with bare minimum needs for it to work.
- [x] Test the **[Tau Prolog JavaScript Library](http://tau-prolog.org/)** and determine if it is the best tool for the project.
- [x] Define facts for categories and relate them with their corresponding questions. Example: `questions_category(c1, [q1, q2, q3])` or `question_category(c1, q1)` or any other approach that accomplishes the future goals.
- [x] Create a rule that builds up a list for the user's quiz session question categories configuration, it must contain numbers from 1 to 8 having the value 1 always at the first place and 8 at the last place, in between the remaining numbers (2 to 7), must be arranged randomly. Example: `[1, 4, 7, 2, 6, 3, 5, 8]`, `[1, 7, 5, 4, 2, 6, 3, 8]`.
- [x] Implement a strategy using `asserta`, `assertz` and `retract` (or any other approach) for managing and storing the results of a completed quiz. Example: when answering the quiz the user goes through multiple categories of questions (8 in total), a fact must take care of the progress of the user which must be updated during the process, something like `persistance_variable(currentCategoryIndex, 3)`, `persistance_variable(categoryConfigurationList, [1, 6, 5, 2, 7, 3, 4, 8])`, `persistance_variable(currentQuestionID, q21)` (any other approach that works should be fine).
- [x] Declare sass font style rules and expose them through the `_typography.scss` file. Include the **Open Sans** font into the App.
- [x] Add scss rules for breakpoints and expose them through the `_breakpoints.scss` file.
- [x] Add sass rules for spacing under the `_spacing.scss` file and expose them.
- [x] Implement the homepage of the site, at this point the app might need the integration of react router, the homepage should be accessible in the route `/`.
- [x] Implement the procedure `random_question_id_from_category/2` which must retrieve a question id randomly from the given category. Example:

  ```pl
  random_question_id_from_category(c3, R).
  % R = q11.

  random_question_id_from_category(c3, R).
  % R = q8.

  random_question_id_from_category(c6, R).
  % R = q20.
  ```

- [x] Implement the quiz page UI with minimal functionality, at this point it is possible to retrieve data from the knowledge base and simulate the flow of going through the 8 questions of the quiz, using the category configuration list.
- [x] Define facts for categories and relate them with their corresponding questions. Example: `questions_category(c1, [q1, q2, q3])` or `question_category(c1, q1)` or any other approach that accomplishes the future goals.
- [x] Define facts for the four possible hogwarts houses. Example: `house(gryffindor), house(ravenclaw) ...` (Modified to just one list with the four houses).
- [x] Define the `normalize_weights` rule in the knowledge base for transforming a given weight (using its option identifier) into a value that is easier to handle and understand for the web app. Working implementation in javascript:

  ```js
  let weightsList = [
    [27.31307938, 25.92258493, -28.87112887, -22.21557617],
    [28.653864, -28.67894522, 26.97274135, -24.67312267],
    [-11.75519742, -10.92370078, -10.86606985, 35.83478687],
  ]

  // Should map the given set of weights to values between 0 and 1 for representing
  // percentages, if an input value is less or equal to 0 then the mapped value will
  // always be 0, otherwise it will become the division between itself by the sum of
  // all the set of input values, after that it will get rounded to the nearest integer
  // and finally get divided by 100. The resulting set of values should always sum up to 1.
  const normalizeWeights = (weights) => {
    return weights
      .map((value) => (value <= 0 ? 0 : value))
      .map((value, _, list) =>
        value > 0 ? value / list.reduce((a, b) => a + b, 0) : value
      )
      .map((value) => Math.round(value * 100) / 100)
  }

  /*
  let normalizedWeights = weightList.map(normalizeWeights)
  
  normalizeWeights -> [
  	[0.51,  0.49,  0,  0]
  	[0.52,  0,  0.48,  0]
  	[0,  0,  0,  1]
  ]
  */
  ```

- [x] Create a procedure that determines which house to return based on the results array. The results array will be the sum of the weights from the options the user selected for all the questions during the quiz, so it will be of the following shape: `[0.75, 0.15, 0.1, 0.1]`. Example:

  ```pl
  determine_house([0.75, 0.15, 0.1, 0.1], R).
  % R = "Gryffindor".

  determine_house([0.15, 0.75, 0.1, 0.1], R).
  % R = "Ravenclaw".

  determine_house([0.1, 0.1, 0.75, 0.15], R).
  % R = "Hufflepuff".

  determine_house([0.1, 0.1, 0.15, 0.75], R).
  % R = "Slytherin".
  ```

  **Note:** Use the already existing `houses` fact to retrieve the resulting string, the index of the highest value will match the winning house.

- [x] Implement the results page UI with minimal functionality, it must calculate the users results and give it the chance to log them into the history.
- [x] Implement the styling for the Quiz page.
- [x] Connect app with firebase, the goal is to store and load the history from there.
- [x] Implement the functionality of the History page, it must only load the records from firebase and show them to the user.
- [x] Store quiz results into firebase at Results page. User must be able to store its result after finishing the quiz into the history database.
- [x] Implement the UI and styling for the Results page.
- [x] Implement a way of using modals in the app and complete the Results page submit flow.
- [x] Implement the UI and styling for the History page.
- [x] Update the site's icon.
- [x] Deploy the site into GitHub pages.
- [x] Update `README.md` file with latest project information, it must contain how to run the project from start to finish.

### Priority order:

The elements in the TODO list must be classified with the following symbols based on its priority:

- 🔴 High priority.
- 🟡 Medium priority.
- 🟢 Low priority.
- 🚧 Task definition is still work in progress.
