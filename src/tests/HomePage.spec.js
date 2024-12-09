import{test,expect} from '@playwright/test'
import { HomePage } from '../pages/HomePage'
const testdata=JSON.parse(JSON.stringify(require('../testData/data.json')))
import {page} from '../setup/Hooks' 
require('../setup/Hooks')


test.describe('Home Page Test', async()=>{

    const homePage=new HomePage()
    test('Phone Module', async({})=>{

        // await homePage.PhonesCount(page)
        //home page
    })

    test('Laptop Module', async({})=>{

        await homePage.LaptopsCount(page)
    })

    test('Monitor Module', async({})=>{
        await homePage.MonitorCount(page)
    })

})