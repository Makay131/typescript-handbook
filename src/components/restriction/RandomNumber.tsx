//RESTRICTING PROPS
type RandomNumberType = {
    value: number,
}

type PositiveNumber = RandomNumberType & {
    isPositive: boolean,
    isNegative?: never,
    isZero?: never
} // --> this is basically saying that when ispositive is passed, you can never pass isNegative and isZero as props
type NegativeNumber = RandomNumberType & {
    isPositive?: never,
    isNegative: boolean,
    isZero?: never
}
type ZeroNumber = RandomNumberType & {
    isPositive?: never,
    isNegative?: never,
    isZero: boolean,

}

type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber;

export default function RandomNumber({value, isPositive, isNegative, isZero}: RandomNumberProps) {
  return (
    <div>
        {value} {isPositive && 'positive'} {isNegative && 'negative'}{' '}{isZero && 'zero'}
    </div>
  )
}
