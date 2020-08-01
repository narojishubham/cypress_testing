import page from '../support/page-object-model/page'

describe('computer database',() => {

let landing

    beforeEach(() => {
       landing = page.goTOLandingPage()

    })
    it('should navigate to computer',() => {
        landing.verifyAddComputerButtonIsVisible()
    })
     
   it('should be able to add new computer',() => {
       const computerDetailPage = landing.clickAddButton()
        computerDetailPage.fillDetails()
       computerDetailPage.clickCreateComputer()

   })
})