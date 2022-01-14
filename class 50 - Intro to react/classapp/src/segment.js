import Card from "./cards";

export default function ComponentOne(props){

    let images = [
        "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9jdXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1517926112623-f32a800790d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
    ]


    return (
            <div className="bg-success text-center">
            <p className="display-4 text-white p-4">Discover the amazing new app</p>
            <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rem?
            </p>
            <div className="row  p-4">
                <div className="col-6 text-right">
                <button className="btn btn-warning btn-lg">Play Store</button>
                </div>
                <div className="col-6 text-center" >
                <button className="btn btn-warning btn-lg">App Store</button>
                </div>

            </div>
            <div className="row">
            <Card image={images[0]}></Card>
            <Card image={images[1]}></Card>
            <Card image={images[2]}></Card>
            </div>
            </div>
      );

}