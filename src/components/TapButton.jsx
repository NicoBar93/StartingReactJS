export default function TapButton({ children, isSelected, ...props }){
    return (
        <button {...props} className={isSelected ? 'active' : undefined}>{children}</button>
    )
}