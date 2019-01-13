'use strict';

var money = prompt('Input your budget');
var time = prompt('Input date in YYYY-MM-DD format');
var expensesCount = 1;

var appData = {
    'budget': money,
    'timeData': time,
    'expenses': {},
    'optionalExpenses': {},
    'income': [],
    'savings': false
};

while (expensesCount <= 2) {
    var expensesName = prompt('Input expenses');
    var expensesValue = prompt('Input expenses value');
    appData.expenses[expensesName] = expensesValue;
    expensesCount++;
}

alert('Your budget on one day ' + money/30);