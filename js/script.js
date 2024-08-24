// Change code below this line
const getTotalBalanceByGender = (users, gender) => [...users].filter(user => user.gender === gender).reduce((total, user) => total + user.balance, 0);
// Change code above this line