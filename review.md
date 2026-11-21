# Code review: noa/refund

**Verdict: not ready to merge.**

## Problem
`calcRefund` refunds 90% of `(TICKET_PRICE + SERVICE_FEE)`, but the comment
(and the business rule) say the service fee is **not** refunded.

- 1 ticket: returns 325.8, expected 315 (350 × 0.9)
- 2 tickets: returns 651.6, expected 630

Noa's own tests (`tests/refund.test.js`) fail – "works for me" was not verified with `node tests/run.js`.

## Suggested fix
```js
return qty * TICKET_PRICE * REFUND_RATE;
```

## Note
The two failing `format` tests on this branch are the ₪0.00 bug that is already
fixed on `main` (revert of 73924c4). Rebase/merge `main` before merging.
