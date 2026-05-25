const poll = new Map();

function addOption(option) {
  if (!option || option.trim() === "") {
    return "Option cannot be empty.";
  }
  if (poll.has(option)) {
    return 'Option "${option}" already exists.';
  }
  poll.set(option, new Set());
  return 'Option "${option}" added to the poll.';
}

function vote(option, voterId) {
  if (!poll.has(option)) {
    return 'Option "${option}" does not exists.';
  }

  const votersSet = poll.get(option);

  if (votersSet.has(voterId)) {
    return 'Voter "${voterId}" has already voted for "${option}".';
  }

  votersSet.add(voterId);
  return 'Voter "${voterId}" voted for "${option}".';
}

function displayResults() {
  let resultString = "Poll result:\n";

  for (const [option, voterSet] of poll.entries) {
    const votesCount = voterSet.size();
    resultString += "${option}: ${votesCount} votes\n";
  }

  return resultString.trim();
}

addOption("Vietnam");
addOption("Laos");
addOption("Campuchia");
