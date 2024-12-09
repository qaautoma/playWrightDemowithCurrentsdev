exports.HomePage=
class HomePage{

    constructor(page)
    {
        this.page=page
        this.phonesCategories="#cat+a"
        this.laptopsCategories="#cat+a+a"
        this.monitorsCategories="#cat+a+a+a"
        this.countOfItems="[class='hrefch']"

    }

    async PhonesCount()
    {
        await this.page.click(this.phonesCategories)
        const numberOfPhones=await this.page.$$(this.countOfItems)
        expect(numberOfPhones).toBe(7)
    }
    async MonitorCount()
    {
        await this.page.click(this.monitorsCategories)
        const numberOfMonitor=await this.page.$$(this.countOfItems)
        expect(numberOfMonitor).toBe(2)
    }
    async LaptopsCount()
    {
        await this.page.click(this.laptopsCategories)
        const numberOfLaptops=await this.page.$$(this.countOfItems)
        expect(numberOfLaptops).toBe(6)

    }

}