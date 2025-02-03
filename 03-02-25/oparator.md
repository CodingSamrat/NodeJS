| **Category**         | **Operator**           | **Description**                           | **Example**               | **Result** |
|----------------------|-----------------------|-------------------------------------------|---------------------------|------------|
| **Arithmetic**       | `+`                    | Addition                                  | `5 + 3`                   | `8`        |
|                      | `-`                    | Subtraction                               | `5 - 3`                   | `2`        |
|                      | `*`                    | Multiplication                            | `5 * 3`                   | `15`       |
|                      | `/`                    | Division                                  | `5 / 2`                   | `2.5`      |
|                      | `%`                    | Modulus (Remainder)                       | `5 % 2`                   | `1`        |
|                      | `**`                   | Exponentiation (Power)                    | `2 ** 3`                   | `8`        |
| **Assignment**       | `=`                    | Assign value                              | `x = 10`                   | `x = 10`   |
|                      | `+=`                   | Add and assign                           | `x += 2` (`x = x + 2`)    | `12`       |
|                      | `-=`                   | Subtract and assign                      | `x -= 2` (`x = x - 2`)    | `8`        |
|                      | `*=`                   | Multiply and assign                      | `x *= 2` (`x = x * 2`)    | `20`       |
|                      | `/=`                   | Divide and assign                        | `x /= 2` (`x = x / 2`)    | `5`        |
|                      | `%=`                   | Modulus and assign                       | `x %= 3` (`x = x % 3`)    | `1`        |
|                      | `**=`                  | Exponentiation and assign                | `x **= 2` (`x = x ** 2`)  | `100`      |
| **Comparison**       | `==`                   | Equal to (type conversion)               | `5 == "5"`                | `true`     |
|                      | `===`                  | Strict equal (no type conversion)        | `5 === "5"`               | `false`    |
|                      | `!=`                   | Not equal                                | `5 != "5"`                | `false`    |
|                      | `!==`                  | Strict not equal                         | `5 !== "5"`               | `true`     |
|                      | `>`                    | Greater than                             | `5 > 3`                   | `true`     |
|                      | `<`                    | Less than                                | `5 < 3`                   | `false`    |
|                      | `>=`                   | Greater than or equal to                 | `5 >= 5`                  | `true`     |
|                      | `<=`                   | Less than or equal to                    | `5 <= 3`                  | `false`    |
| **Logical**          | `&&`                   | Logical AND                              | `true && false`           | `false`    |
|                      | `||`                   | Logical OR                               | `true || false`           | `true`     |
|                      | `!`                    | Logical NOT                              | `!true`                   | `false`    |
| **Bitwise**          | `&`                    | Bitwise AND                              | `5 & 1`                   | `1`        |
|                      | `|`                    | Bitwise OR                               | `5 | 1`                   | `5`        |
|                      | `^`                    | Bitwise XOR                              | `5 ^ 1`                   | `4`        |
|                      | `~`                    | Bitwise NOT                              | `~5`                      | `-6`       |
|                      | `<<`                   | Left shift                               | `5 << 1`                  | `10`       |
|                      | `>>`                   | Right shift                              | `5 >> 1`                  | `2`        |
|                      | `>>>`                  | Unsigned right shift                     | `-5 >>> 1`                | `2147483645` |
| **Ternary**          | `? :`                  | Conditional (Ternary)                    | `5 > 3 ? "Yes" : "No"`    | `"Yes"`    |
| **Type**            | `typeof`               | Returns the type of a variable           | `typeof 5`                | `"number"` |
|                      | `instanceof`           | Checks if an object is an instance       | `[] instanceof Array`     | `true`     |
| **Unary**           | `+`                     | Converts to number                       | `+"5"`                    | `5`        |
|                      | `-`                     | Negates a number                         | `-5`                      | `-5`       |
|                      | `++`                   | Increment                                | `x = 5; x++`              | `6`        |
|                      | `--`                   | Decrement                                | `x = 5; x--`              | `4`        |
| **Spread/Rest**      | `...`                   | Spread/rest operator                     | `const arr = [...nums]`   | `[1,2,3]`  |
| **Optional Chaining**| `?.`                   | Safe property access                     | `obj?.prop`               | `undefined` |
| **Nullish Coalescing**| `??`                  | Returns right-hand side if left is null/undefined | `null ?? "default"` | `"default"` |
