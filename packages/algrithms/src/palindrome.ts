/* * A palindrome is a string that reads the same forward and backward, for example,
 * - radar, toot, madam.
 */
function isPalindrome(str:string): boolean {
  const reversed = Array.from(str).reverse().join('');
  return str === reversed;
}










