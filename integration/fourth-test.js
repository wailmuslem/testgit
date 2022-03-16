
describe('Sign in on IMDB', () => {
    beforeEach(() => {
cy
.visit('https://www.imdb.com/registration/signin?ref=nv_generic_lgin&u=%2F')

.get('[href="https://www.imdb.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.imdb.com%2Fregistration%2Fap-signin-handler%2Fimdb_us&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=imdb_us&openid.mode=checkid_setup&siteState=eyJvcGVuaWQuYXNzb2NfaGFuZGxlIjoiaW1kYl91cyIsInJlZGlyZWN0VG8iOiJodHRwczovL3d3dy5pbWRiLmNvbS8_cmVmXz1sb2dpbiJ9&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&tag=imdbtag_reg-20"] > .auth-provider-text')
.click()

.get('input#ap_email')
.type('testwail123outlook.com')

.get('input#ap_password')
.type('Testskola123')

.get('#signInSubmit')
.click()

})


it('Upcoming Release for United States', () => {
    cy
    .visit('https://www.imdb.com/')

    .get('#imdbHeader-navDrawerOpen > #iconContext-menu')
    .click()

    .get('.NavLinkCategoryList__StyledContainer-sc-13vymju-0 > :nth-child(1) > ._2Q0QZxgQqVpU0nQBqv1xlY > [data-testid="category-expando"] > ._2BeDp2pKthfMnxArm4lS0T > #iconContext-chevron-right')
    .click()

    .get('[href="https://www.imdb.com/calendar/?ref_=nv_mv_cal"] > .ipc-list-item__text')
    .click()

    .get('#main > :nth-child(1)')
    .should('be.visible')

  
    .get('#main > :nth-child(3)')
    .should('be.visible')

    


})
})
