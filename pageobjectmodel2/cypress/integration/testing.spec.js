/// <reference types ="cypress"/>
import {Page} from '../support/pageModel/pages'
import {LandingPage} from '../support/pageModel/LandingPage'
import {AddComputerPage} from '../support/pageModel/AddComputerPage'
describe( 'testing computer app',function (){

const page = new Page()
const landingPage = new LandingPage()
const addComputerPage = new AddComputerPage()

beforeEach(() =>{
     page.gotoLandingPage ()
   })
     it('navigate to computer database page',function(){
         landingPage.verifyAddComputerButtonVisible();
     })
     it('should be able to add new computer',function(){
         computerDetailPage= LandingPage.clickAddButton();
         
         // . fillComputerDetails()
         // .clickCreateComputer()
        //  LandingPage.verifyAlertMessage('Done! Computer test has been created');
     })

})

