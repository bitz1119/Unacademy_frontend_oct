import './index.css'

export default function HelloWorld(properties){
    console.log(properties)
    return (
    <div>
        <h1 className="header"> Hello {properties.title} {properties.userName}</h1>
        <h1>Welcome to react tutorial</h1>
    </div>
    );
}
