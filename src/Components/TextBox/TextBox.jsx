import './TextBox.css';

export const TextBox = ({textColor, children}) => {
  return (
    <div className="text-box" style={{ color: textColor }}>
        {children}
    </div>
  )
}
