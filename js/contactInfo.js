export const contactInfo = {
    'email': 'info@primeplusemortgages.co.uk',
    'phone': '+44 161 818 8824',
    'address': '7 Bevendon Sq',
    'city': 'Salford',
    'postcode': 'M7 4TP',
    'country': 'UK',
    'company': 'Prime Plus Mortgages Ltd',
    'fullAddress': function () {
        return `${this.address} ${this.city}, ${this.postcode}, ${this.country}`;
    }
};

