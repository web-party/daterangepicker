describe('Date Range Picker', () => {
    it('should use default options when created without arguments', () => {
        $('<div></div>').daterangepicker();
        let daterangepicker = $('.daterangepicker');
        expect(daterangepicker).toBeInDOM();
        expect(daterangepicker).toBeHidden();
    });
});
