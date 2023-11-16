// TEMPLATE LITERALS WITH MIXING TYPES
/*
Position prop can be one of the followings:
    "top-left", "top-center", "top-right",
    "center-left", "center", "center-right",
    "bottom-left", "bottom-center", "bottom-right"
*/

type VerticalPosition = 'top' | 'center' | 'bottom';
type HorizontalPosition = "left" | 'center' | 'right';

type  PositionProps = {
    position: Exclude<`${VerticalPosition}-${HorizontalPosition}`, 'center-center'> | 'center',
} 

export default function Toast({position}: PositionProps) {
  return (
    <div>Toast Notification Position - {position}</div>
  )
}
