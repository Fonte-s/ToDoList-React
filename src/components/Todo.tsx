
type TodoProps = {
    texto: string;
}

export function Todo (props:TodoProps ) {
    return(
<p>{props.texto}</p>

    );


}