context('IMDB Titanic assert movie title', () => {

  it('Herkules', function () { 
      cy
      .visit('https://www.imdb.com/')

      .get('#suggestion-search')
      .type('Titanic')
      .get('#iconContext-magnify')
      .click()

      .get(':nth-child(3) > .findList > tbody > .odd > .result_text > a')
      .contains('Titanic')
      .should('be.visible')
      .click()

  })
})
