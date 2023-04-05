/**
 * seed를 기반으로 배열의 무작위 원소를 반환하는 함수
 */
export function randomFromSeed(seed: string, arr: any[]): any {
  function randomInt(seed: string) {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      const char = seed.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0;
    }
    const x = Math.sin(hash) * 10000;
    return x - Math.floor(x);
  }

  const newSeed = Math.floor(randomInt(seed) * 100000);
  const index = newSeed % arr.length;
  return arr[index];
}


export function btnColorFromSeed(seed) {
  const colors = [
    'gray',
    'zinc',
    'stone',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
    'point',
  ];
  return randomFromSeed(seed, colors);
}