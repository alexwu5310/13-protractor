'use strict';

describe('Watchlist Metadata', function(){

    it('should have the correct title', function() {

        //open the webpage
        browser.get('http://localhost:8080/#/watchlist');

        var title = browser.getTitle();
        expect(title).toEqual("My Movie Page");
    });
});

describe('Initial Page Appearance', function(){
    //open the webpage
    browser.get('http://localhost:8080/#/watchlist');

    it('should have the correct header', function(){
        var header = element(by.css('header h1'));
        expect(header.getText()).toEqual("Movies to Watch");
    });

    it('should not show the search results', function() {
        var resultsSection = element(by.css('.search-results'));
        expect(resultsSection.isPresent()).toEqual(false);
    })

    it('should have the correct links', function() {
        var homeLink = element(by.linkText('HOME'));
        var blogLink = element(by.linkText('BLOG'));

        expect(homeLink.getAttribute('href')).toEqual('http://localhost:8080/#/home');
        expect(blogLink.getAttribute('href')).toEqual('http://localhost:8080/#/blog');
    });
});

describe('Search Form', function() {

    it('should enable the button on valid input', function() {
        var input = element(by.model('searchQuery'));
        var button = element(by.css('#searchButton'));

        //has content, is enabled
        input.sendKeys('batman');
        expect(button.isEnabled()).toEqual(true);

        //browser.pause();

        //has no content, is not enabled
        input.clear();
        expect(button.isEnabled()).toEqual(false);
    })

    it('should show the modal on search', function() {
        var input = element(by.model('searchQuery'));
        var button = element(by.css('#searchButton'));
        var modal = element(by.css('.modal-body'));

        input.sendKeys('Star Wars');

        button.click();

        expect(modal.isPresent()).toEqual(true);


    })

});