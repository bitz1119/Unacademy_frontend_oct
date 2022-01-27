import { Remarkable } from 'remarkable';

function Display(props) {

    var md = new Remarkable();

    return ( <>

        <div dangerouslySetInnerHTML={{__html: md.render(props.data)}}></div>

    </> );
}

export default Display;