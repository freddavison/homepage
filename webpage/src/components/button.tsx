// @ts-ignore
export const Button = (props) => {
    const {label, url} = props.link;
    return (
        <a href={url}>
            <button>{label}</button>
        </a>
    );
};