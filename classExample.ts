class LoginPage {
    url: string ="12";
    static pwd:string="DoNotChange"

  constructor(url: string) {
    this.url = url;
  }

open(): void {
    console.log(`Navigating to ${this.url}`);
  }

static close(pwd2:string):void{ 
    pwd2=LoginPage.pwd;
    console.log(pwd2);
}
}

const login = new LoginPage("https://example.com/login");
login.open(); // Output: Navigating to https://example.com/
LoginPage.close("closed");
//close();