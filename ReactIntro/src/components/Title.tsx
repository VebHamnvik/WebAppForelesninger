

type TitleProps = {
    // Spørsmåltegn gjør at title er optional i denne typen
    title?: string
    username?: string
}

export default function Title(props: TitleProps) {
    
    // Mtp at title er optional, så burde det settes en default 
    const { title = "Default title", username } = props
    return (
        <article>
            <h2>{title}</h2>
            <p>{username}</p>
        </article>
    );
}
