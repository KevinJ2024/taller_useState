import { TextBox } from '../../Components/TextBox/TextBox';
import './Footer.css';

export const Footer = ({hfColor, textColor}) => {
  return (
    <footer style={{ backgroundColor: hfColor }}>
        <TextBox textColor={textColor}>
            <h1>Footer</h1>
        </TextBox>
    </footer>
  )
}
