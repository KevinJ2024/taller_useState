import { TextBox } from '../../Components/TextBox/TextBox';
import './Main.css';

export const Main = ({bgColor ,textColor}) => {
  return (
    <main style={{ backgroundColor: bgColor }}>
        <TextBox textColor={textColor}>
            <h1>Main</h1>
        </TextBox>
    </main>
  )
}
