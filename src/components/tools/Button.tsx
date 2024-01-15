
// Button Component and Styles
const buttonStyle = "max-sm:w-full text-center px-5 py-3 bg-gray-700 text-white rounded-md font-medium inline-block transition-all duration-1000 hover:bg-gray-900"

interface IButtonProps {
    children: React.ReactElement | string
    className?: string
    type?: "submit" | "reset" | "button" | undefined
    extendStyles?: string
}
const Button: React.FC<IButtonProps> = ({children , className , type, extendStyles}) => {
    return (
        <button type={type} className={(extendStyles && `${buttonStyle} ${extendStyles}`) || (className ?? buttonStyle) }>
            {children}
        </button>
    )
}

export {Button , buttonStyle}
