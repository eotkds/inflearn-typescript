/**
 * const를 선언한 경우 사용 할 수 없는 함수 // error발생
 * @param enumObject : enum 객체
 * @param value : 확인할 값(value)
 * @returns true / false : 해당 값(value)이 있는지 확인/ 값이 없는 경우 숫자값이 할당되고, 양방향 맵핑 되기 때문에 isNaN으로 value로 키값을 받는 것을 filter한다.
 */
export function getIsValidEnumValue(enumObject: any, value: number | string) {
  return Object.keys(enumObject)
    .filter((key) => isNaN(Number(key)))
    .some((key) => enumObject[key] === value);
}
