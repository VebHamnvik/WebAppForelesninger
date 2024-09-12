import Title from "./title";

type CardProps = {
    title: string;
    desc: string;
    username: string,
    setUsername: any
}

export default function Card(props: CardProps) {
    const { title = "Default tittel", desc = "Default desc", setUsername, username } = props

    const changeUsername = () => {
        setUsername("Endret tittel")
    }

    return (
        <article>
            <Title  title = {title} username = {username} />
            <p>{ desc }</p>
            <button onClick={changeUsername}>Logg ut</button>
        </article>
    )
}