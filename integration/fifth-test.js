
describe('The Oscars awards', () => {
    it('Create watchlist', () => {
    cy
    .visit('https://www.imdb.com/')

    .get('#imdbHeader-navDrawerOpen > #iconContext-menu > [d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"]')
    .click()

    .get(':nth-child(3) > ._2Q0QZxgQqVpU0nQBqv1xlY > [data-testid="category-expando"] > ._2aunAih-uMfbdgTUIjnQMd')
    .should('be.visible')
    .click()

    .get('[href="/oscars/?ref_=nv_ev_acd"] > .ipc-list-item__text')
    .click()

    .get(':nth-child(3) > .ab_widget > .ab_ninja > .seemore')
    .should('have.length', 1)
    .first()
    .click()

    .get('.nominees-widget__title')
    .should('have.text', 'The 94th Annual Academy Awards')

    //Best Movies assertions
    .get(':nth-child(1) > .event-widgets__award-categories > :nth-child(1) > .event-widgets__award-category-name')
    .should('have.text', 'Best Motion Picture of the Year')

    .get(':nth-child(1) > .event-widgets__award-categories > :nth-child(1) > .event-widgets__award-category-nominations > :nth-child(1) > :nth-child(1) > .event-widgets__nomination-details > .event-widgets__nominees > .event-widgets__primary-nominees > :nth-child(1) > .event-widgets__nominee-name > a')
    .should('have.text', 'Belfast')

    .get(':nth-child(1) > .event-widgets__award-categories > :nth-child(1) > .event-widgets__award-category-nominations > :nth-child(1) > :nth-child(2) > .event-widgets__nomination-details > .event-widgets__nominees > .event-widgets__primary-nominees > :nth-child(1) > .event-widgets__nominee-name > a')
    .should('have.text', 'CODA')

    //Best Actor assertions
    .get(':nth-child(2) > .event-widgets__award-category-nominations > :nth-child(2) > :nth-child(1) > .event-widgets__nomination-details > .event-widgets__nominees > .event-widgets__primary-nominees > :nth-child(1) > .event-widgets__nominee-name > a')
    .should('have.text', 'Denzel Washington')

    .get(':nth-child(2) > .event-widgets__award-category-nominations > :nth-child(3) > .event-widgets__award-nomination > .event-widgets__nomination-details > .event-widgets__nominees > .event-widgets__primary-nominees > :nth-child(1) > .event-widgets__nominee-name > a')
    .should('have.text', 'Will Smith')

    //Best Actress assertions
    .get(':nth-child(3) > .event-widgets__award-category-nominations > :nth-child(3) > .event-widgets__award-nomination > .event-widgets__nomination-details > .event-widgets__nominees > .event-widgets__primary-nominees > :nth-child(1) > .event-widgets__nominee-name > a')
    .should('have.text', 'Penélope Cruz')

    .get(':nth-child(3) > .event-widgets__award-category-nominations > :nth-child(1) > :nth-child(1) > .event-widgets__nomination-details > .event-widgets__nominees > .event-widgets__primary-nominees > :nth-child(1) > .event-widgets__nominee-name > a')
    .should('have.text', 'Jessica Chastain')


})
})
