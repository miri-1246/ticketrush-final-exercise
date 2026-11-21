const { calcTotal } = require('../js/pricing');

// לפי החלטת המוצר: calcTotal(qty, isMember, isStudent)
test('student discount: 2 tickets', function () { assertEq(calcTotal(2, false, true), 619); });
test('no discount for regular price', function () { assertEq(calcTotal(2, false, false), 724); });
test('member + student gets only the bigger discount (20%)', function () { assertEq(calcTotal(2, true, true), 584); });
