const { calcTotal, maxTickets } = require('../js/pricing');

test('two tickets cost 724', function () { assertEq(calcTotal(2), 724); });
test('one ticket costs 362', function () { assertEq(calcTotal(1), 362); });
test('regular customers may buy up to 8', function () { assertEq(maxTickets(), 8); });
test('member pays 584 for two tickets', function () { assertEq(calcTotal(2, true), 584); });
test('members are capped at 4 tickets', function () { assertEq(maxTickets(true), 4); });
test('member over the cap returns null', function () { assertEq(calcTotal(5, true), null); });
test('zero tickets returns null', function () { assertEq(calcTotal(0, false), null); });
test('regular customer over 8 returns null', function () { assertEq(calcTotal(9, false), null); });
