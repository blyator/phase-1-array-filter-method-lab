function findMatching(drivers, name) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === name.toLowerCase()
  );
}

function findMatching(drivers, name) {
  return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(name.toLowerCase())
  );
}

function fuzzyMatch(drivers, name) {
  return drivers.filter((driver) =>
    driver.toLowerCase().includes(name.toLowerCase())
  );
}

function fuzzyMatch(drivers, name) {
  return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(name.toLowerCase())
  );
}

function matchName(drivers, name) {
  return drivers.filter(
    (driver) => driver.name.toLowerCase() === name.toLowerCase()
  );
}
