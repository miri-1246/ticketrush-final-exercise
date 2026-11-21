const { joinWaitlist } = require('../js/waitlist');

test('adds a valid email', function () { assertEq(joinWaitlist([], 'a@b.co').join(), 'a@b.co'); });
test('trims and lowercases', function () { assertEq(joinWaitlist([], '  Dana@Mail.COM ').join(), 'dana@mail.com'); });
test('rejects email without @', function () { assertEq(joinWaitlist([], 'dana.mail.com').length, 0); });
test('rejects email without dot after @', function () { assertEq(joinWaitlist([], 'dana@mail').length, 0); });
test('skips duplicates', function () { assertEq(joinWaitlist(['a@b.co'], ' A@B.co').length, 1); });
test('does not change the original list', function () {
  const list = ['x@y.io'];
  const out = joinWaitlist(list, 'new@y.io');
  assertEq(list.length, 1); assertEq(out.length, 2); assertEq(out !== list, true);
});
