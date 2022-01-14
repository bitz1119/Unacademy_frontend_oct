import './index.css'

export default function HelloWorld(prop){
    console.log(prop)
    return (
    <div>
        <h1 className="header"> Hello {prop.title} {prop.userName}</h1>
        <h1>Welcome to react tutorial</h1>
    </div>
    );
}
