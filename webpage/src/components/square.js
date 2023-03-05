const STYLE = 'square flex items-center border-4 hover:bg-georgia border-style-solid border-georgia hover:cursor-pointer';

export const Square = props => {
    return (
            <div className={STYLE}>
                {props.content}
            </div>
    );
};