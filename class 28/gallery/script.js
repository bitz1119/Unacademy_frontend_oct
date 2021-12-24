let images = ["https://media.istockphoto.com/photos/analyst-working-with-business-analytics-and-data-management-system-on-picture-id1286642964?b=1&k=20&m=1286642964&s=170667a&w=0&h=doK0J0FhFqTF83bb5XggguZgbR-pF16ngrDcr7xG21o=",
"https://media.istockphoto.com/photos/wooden-blocks-with-people-icon-on-yellow-background-organization-picture-id1264228218?b=1&k=20&m=1264228218&s=170667a&w=0&h=0yXVpJV5ZpMoLI9IO8py1xPex1QHvvil84I8oyCVjMQ=",
"https://media.istockphoto.com/photos/two-bubble-talk-or-comment-sign-symbol-on-blue-background-picture-id1304849823?b=1&k=20&m=1304849823&s=170667a&w=0&h=WyxXj3Pj8gAD-9UP3bijhKuKFW2_1kCamAa-XbJrpxQ=",
"https://media.istockphoto.com/photos/closeup-image-of-male-hands-using-smartphone-with-icon-telephone-picture-id1168945108?b=1&k=20&m=1168945108&s=170667a&w=0&h=vuUT6Qw8h-eRIHQEesB0_fC1V1xgQtPdWp4KyaVXq0M=",
"https://media.istockphoto.com/photos/document-management-system-being-setup-by-it-consultant-working-on-picture-id1291478674?b=1&k=20&m=1291478674&s=170667a&w=0&h=uL2_4Aypci7qRRBW8kCxrQd1hcraDtz7r3yMFElm9Uw=",
"https://media.istockphoto.com/photos/email-marketing-concept-picture-id1282799241?b=1&k=20&m=1282799241&s=170667a&w=0&h=0MRaTWVvtApyUjK2I4wOMbQSDD0HMSxP-I_O7egPFDQ=",
"https://media.istockphoto.com/photos/networking-and-social-media-wood-blocks-and-people-icons-picture-id1281811387?b=1&k=20&m=1281811387&s=170667a&w=0&h=7Z6XDn0pIurtBkddgK3nZq_12M1qEQIjN0iD-_68XOk=" ]

let index = 0;
function changeImage(){
    let img = document.getElementsByTagName("img");
    // console.log(img[0].src)
    img[0].src = images[index++];
    index = index%images.length;
}

setInterval(changeImage,1000)