type GreetProps = {
  name: string,
  messageCount?: number,
  isLoggedIn: boolean,
  //padding?: number[] ---> any length  
  padding?: [number, number, number, number] // This is called Tuple Type --> length is restricted so it is not like number[]
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>{props.isLoggedIn ? `Welcome home, ${props.name}! You have ${props.messageCount} messages` : 'Welcome, guest!'}</h2>
    </div>
  )
}
