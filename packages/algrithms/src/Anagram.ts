function areAnagrams1(s1: string, s2: string): boolean {
  s1 = s1
    .split("")
    .sort()
    .join("");
  s2 = s2
    .split("")
    .sort()
    .join("");

  return s1 === s2;
}

function areAnagrams(s1: string, s2: string): boolean {
  const charCount = new Map<string, number>();
  for (const char of s1) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  for (const char of s2) {
    const cc = charCount.get(char);
    if(!cc) return false;
    charCount.set(char, cc - 1);
  }
  return Array.from(charCount.values()).every(val => val === 0);
}

console.log("listen and silent:")
console.log(areAnagrams("listen", "silent"))

console.log("foo and bar:")
console.log(areAnagrams("foo", "bar"))