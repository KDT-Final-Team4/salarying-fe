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

export function isIsoDate(str: string): boolean {
  // 날짜 형식 패턴
  const pattern = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.?(\d{0,3})?(Z|[+-]\d{2}:?\d{2})$/;

  // 문자열이 패턴과 일치하는지 여부 반환
  return pattern.test(str);
}

export function sortByProperty(objects, property, ascending = true) {
  // 정렬 함수
  const compareFn = (a, b) => {
    // a와 b의 속성값 비교
    const aValue = a[property];
    const bValue = b[property];
    let result = 0;

    if (aValue < bValue) {
      result = -1;
    } else if (aValue > bValue) {
      result = 1;
    }

    // 오름차순 또는 내림차순 여부에 따라 결과값 반전
    if (!ascending) {
      result *= -1;
    }

    return result;
  };

  // 객체 배열 정렬
  return objects?.sort(compareFn);
}

export function formatIsoTime(isoDate) {
  // Date 객체로 변환
  const date = new Date(isoDate);

  // 시간, 분, 초 추출
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // 가독성 좋은 문자열로 변환
  const formattedTime = `${hours}시 ${minutes}분 ${seconds}초`;

  return formattedTime;
}
export function getStatusObj(arr) {
  const statusCount = {};
  arr?.forEach((item) => {
    if (statusCount.hasOwnProperty(item.status)) {
      statusCount[item.status]++;
    } else {
      statusCount[item.status] = 1;
    }
  });
  return statusCount;
}