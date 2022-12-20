console.group('https://edabit.com/challenge/2FF7RKw9RLwc3EBY9');
{
  // VE = "Very Easy"
  // EA = "Easy"
  // ME = "Medium"
  // HA = "Hard"
  // VH = "Very Hard"
  // EX = "Expert"

  const levels = { 'VE': 5, 'EA': 10, 'ME': 20, 'HA': 40, 'VH': 80, 'EX': 120 };

  class Challenge {
    constructor(id, level) {
      this.id = id;
      this.level = level;
    }
    get points() {
      return levels[this.level];
    }
  }

  class User {
    name;
    xp;
    log;

    constructor(name, xp, log) {
      this.name = name;
      this.xp = xp;
      this.log = log;
    }

    newSolvedChallenge(name) {
      this.log.push(name.id);
      this.xp += name.points;
    }
  };

  const user1 = new User("Madam", 0, []);
  const user2 = new User("Steve", 0, []);

  // VE = 5 XP
  // EA = 10 XP
  // ME= 20 XP
  // HA= 40 XP
  // VH = 80 XP
  // EX = 120 XP

  const challenge1 = new Challenge(1, "VE");
  const challenge2 = new Challenge(2, "EA");
  const challenge3 = new Challenge(3, "ME");
  const challenge4 = new Challenge(4, "HA");
  const challenge5 = new Challenge(5, "VH");
  const challenge6 = new Challenge(6, "EX");


  // user1
  user1.newSolvedChallenge(challenge1);
  user1.newSolvedChallenge(challenge4);
  user1.newSolvedChallenge(challenge6);

  // user2
  user2.newSolvedChallenge(challenge5);
  user2.newSolvedChallenge(challenge3);
  user2.newSolvedChallenge(challenge2);

  // Test user1
  console.log('---------------user1-----------------------');
  console.log('Name result: "Madam"  => ', user1.name);
  console.log('XP result: "165"  => ', user1.xp);
  console.log('Log result: "[1, 4, 6]"  => ', user1.log);

  // Test user2
  console.log('---------------user2-----------------------');
  console.log('Name result: "Steve"  => ', user2.name);
  console.log('XP result: "110"  => ', user2.xp);
  console.log('Log result: "[5, 3, 2]"  => ', user2.log);

  // Test challenges
  console.log('--------------Test challenges--------------');
  console.log('Level result: "HA"  => ', challenge4.level);
  console.log('Id result: "3"  => ', challenge3.id);
  console.log('Points result: "5"  => ', challenge1.points);
  console.log('--------------Test challenges--------------');
  console.log('Level result: "ME"  => ', challenge3.level);
  console.log('Id result: "5"  => ', challenge5.id);
  console.log('Points result: "120"  => ', challenge6.points);

}
console.groupEnd();

console.group('https://edabit.com/challenge/ifDM26p25bqS8EsFu');
{

}
console.groupEnd();