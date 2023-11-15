import { useThemeContext } from "./ThemeContext"


export default function Box() {
    const theme = useThemeContext();
  return (
    <div style={{backgroundColor: theme.primary.main, color: theme.primary.text}}>Theme Context</div>
  )
}
