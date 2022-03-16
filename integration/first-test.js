context('IMDB homepage', () => {

  it('Herkules', function () { 
      cy
      .visit('https://www.imdb.com/')

      .get('#suggestion-search')
      .type('Herkules')
      .get('#iconContext-magnify')
      .click()

      .get(':nth-child(3) > .findList > tbody > :nth-child(1) > .result_text > a')
      .should('be.visible')
      .click()

      .get('[data-testid=hero-title-block__title]')
      .contains('Herkules')
      .should('be.visible')

  })
})
