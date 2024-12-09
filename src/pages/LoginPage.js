
exports.LoginPage=
class LoginPage{

    constructor(page)
    {
        this.page=page
        this.loginLink="#login2"
        this.usernameInput="#loginusername"
        this.passwordInput="#loginpassword"
        this.loginButton="//button[text()='Log in']"

    }

    // async goToLoginPage(url)
    // {
    //     await this.page.goto(url)
    // }

    async loginToApplication(username, password){
        console.log("This is a login page..")
        await this.page.click(this.loginLink)
        await this.page.fill(this.usernameInput,username)
        await this.page.fill(this.passwordInput,password)
        await this.page.click(this.loginButton)
        await this.page.waitForTimeout(3000)
    }
}