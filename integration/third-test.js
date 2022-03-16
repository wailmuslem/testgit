
describe('Sign in on IMDB and assert die hard and log out', () => {
  beforeEach(() => {
cy
.visit('https://www.imdb.com/registration/signin?ref=nv_generic_lgin&u=%2F')

.get('[href="https://www.imdb.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.imdb.com%2Fregistration%2Fap-signin-handler%2Fimdb_us&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=imdb_us&openid.mode=checkid_setup&siteState=eyJvcGVuaWQuYXNzb2NfaGFuZGxlIjoiaW1kYl91cyIsInJlZGlyZWN0VG8iOiJodHRwczovL3d3dy5pbWRiLmNvbS8_cmVmXz1sb2dpbiJ9&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&tag=imdbtag_reg-20"] > .auth-provider-text')
.click()

.get('input#ap_email')
.type('testwail123@outlook.com')

.get('input#ap_password')
.type('Testskola123')

.get('#signInSubmit')
.click()

})


it('Search engine', () => {
  cy
  .visit('https://www.imdb.com/')

  .get('#suggestion-search')
  .type('Die Hard')
  .get('#suggestion-search-button > #iconContext-magnify')
  .click()

  .get('.findSearchTerm')
  .should('have.length', 1)
  .first()
  .should('have.text', '"Die Hard"')

  cy.get('._3x17Igk9XRXcaKrcG3_MXQ > .FlyoutMenu-sc-xq6xx0-0 > .ipc-button > .ipc-button__text > #iconContext-arrow-drop-down')
  .click()

  cy.get('.imdb-header-account-menu__sign-out > .ipc-list-item__text')
  .click()


})
})
