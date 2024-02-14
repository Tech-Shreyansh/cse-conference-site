export default function Item(props) {
    return (
        <tr>
            <td className="snowidth text-center">{props.num}</td>
            <td className="nametd">{props.name}</td>
            <td className="afftd">{props.institute}</td>
        </tr>
    );
}








