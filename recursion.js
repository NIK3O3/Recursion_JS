"use strict";

// 1. Надрукувати рядок у зворотному порядку
function printReversed(str) {
  function reverse(index) {
    if (index < 0) return "";

    return str[index] + reverse(index - 1);
  }

  console.log(reverse(str.length - 1));
}

// Вузол однозв'язного списку для завдання 2
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// 2. Поміняти місцями сусідні вузли, не змінюючи їхні значення
function swapPairs(head) {
  if (head === null || head.next === null) return head;

  const second = head.next;
  const rest = second.next;

  head.next = swapPairs(rest);
  second.next = head;

  return second;
}

// 3. Обчислити n-те число Фібоначчі для цілого n >= 0
function fibonacci(n) {
  function calculate(remaining, current, next) {
    if (remaining === 0) return current;

    return calculate(remaining - 1, next, current + next);
  }

  return calculate(n, 0, 1);
}

// 4. Порахувати способи піднятися на n сходинок кроками по 1 або 2
function climbStairs(n) {
  function count(remaining, current, next) {
    if (remaining === 0) return current;

    return count(remaining - 1, next, current + next);
  }

  return count(n, 1, 1);
}

// 5. Піднести x до цілого степеня n методом піднесення до квадрата
function pow(x, n) {
  if (n === 0) return 1;
  if (n < 0) return pow(1 / x, -n);

  const remainder = n % 2;
  const half = pow(x, (n - remainder) / 2);

  if (remainder === 0) return half * half;
  return half * half * x;
}

printReversed("tiger");

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
const swapped = swapPairs(head);
console.log(
  swapped.val,
  swapped.next.val,
  swapped.next.next.val,
  swapped.next.next.next.val,
);
console.log(swapPairs(null));
console.log(swapPairs(new ListNode(1)).val);

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));

console.log(climbStairs(2));
console.log(climbStairs(3));

console.log(pow(2, 10));
console.log(pow(2.1, 3));
console.log(pow(2, -2));
