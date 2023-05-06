type SquareProps = {
    value ?: string | null;
    onClick ?: () => void;
}

const Square = ({value, onClick} : SquareProps) => {
    return (
        <>
            <div className='square' onClick = {onClick}>
                <h1>{value}</h1>
            </div>
        </>
    )
}

export default Square