function add(a:number,b:number): number{
    return a+b;
}

let result:number= add(5.6,5.6);
console.log(result);

function even(a:number) : any{
    if (a%2==0){
        return a;
    }
    else 
    {
        return "Not a even number";
    }
}
let result2:any= even(7.9);
console.log(result2);

let scores: number[] = [90, 85, 70];
let user: [string, number] = ["Alice", 101];


