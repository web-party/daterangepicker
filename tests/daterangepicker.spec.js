describe('Date Range Picker', () => {
    it('should use default options when created without arguments', () => {
        $('<div></div>').daterangepicker();
        let mainContainer = '.daterangepicker';
        expect(mainContainer).toBeInDOM();
        expect(mainContainer).toBeHidden();
    });
});
