const input =
  "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
const regex = /mul\((\d+),(\d+)\)/g;
const matches = input.matchAll(regex);
let result = 0;
for (const match of matches) {
  result += +match[1] * +match[2];
}
