let Country = function(countryName,code){
    this.countryName = countryName;
    this.code = code;

    this.getCode = function(){
        return this.countryName + this.code;
    }

} 
Country.prototype.getCountryName = function(){
    return this.countryName;
}


let country1 = new Country("INDIA","001");
let country2 = new Country("AUSTRALIA","008");


console.log(country1.getCode);


let country3 = {
    name : "INDIA",
    code : "001",
    get getCode(){
        return this.name +"-" + this.code;
    }
}


console.log(country3.getCode)
console.log(country3.name)


let obj = {
    countries : [],
    set addCountry(name){
        this.countries.push(name);
    }

}

obj.addCountry = "INDIA";
console.log(obj.countries)

