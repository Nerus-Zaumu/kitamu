export function generateRandomPassword(name: string) {
  let end = '';
  for (let i = 0; i < 4; i++) {
    const newChar = Math.floor(Math.random() * 9);
    end = `${end}${newChar}`;
  }
  return name.concat(end);
}
