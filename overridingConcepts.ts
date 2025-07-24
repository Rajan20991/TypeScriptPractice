class BasePage{
    navigate():void{
        console.log("parent method")
    }
}

class HomePage extends BasePage{
    override navigate():number{
        console.log("child method");
        return 4;
    }
}

const bp = new BasePage();
bp.navigate();
const hp = new HomePage();
const n= hp.navigate();
console.log(n);
