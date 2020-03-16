module.exports = function createDreamTeam(members) {
  if (!members) return false;
  var name = "";
  for (i = 0; i < members.length; i++)
  {
    if (typeof(members[i]) == "string")
    {
      name += members[i].trim()[0];
    };
  };

  if (name.length) {
    name = name.toUpperCase().split("").sort().join("");
    return name;
  }
  else return false;
};