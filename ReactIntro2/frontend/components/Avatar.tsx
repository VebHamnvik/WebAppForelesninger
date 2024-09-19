
type AvatarProps = {
    name: string;
};

export default function Avatar(props: AvatarProps){
    const { name } = props
    return (
    <p className="avatar">{ name.charAt(0).toUpperCase()}</p>
)
}