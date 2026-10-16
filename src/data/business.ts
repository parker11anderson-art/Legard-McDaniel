// Single source of truth for business facts. Items marked VERIFY came from
// third-party directories and should be confirmed with the owner before launch.
export const business = {
  name: 'Legard-McDaniel Electric',
  legalName: 'Legard-McDaniel Electric, Inc.',
  phone: '(480) 926-1021',
  phoneHref: 'tel:+14809261021',
  street: '920 E Javelina Ave',
  city: 'Mesa',
  region: 'AZ',
  postal: '85204',
  hoursLabel: 'Mon–Fri · 6 AM – 4 PM',
  hoursSchema: 'Mo-Fr 06:00-16:00',
  founded: 1984, // VERIFY — directories list 1984 and 1985
  license: 'AZ ROC #072095', // VERIFY against roc.az.gov
  mapsHref:
    'https://www.google.com/maps/dir/?api=1&destination=920+E+Javelina+Ave,+Mesa,+AZ+85204',
  serviceArea: [
    'Mesa',
    'Gilbert',
    'Chandler',
    'Tempe',
    'Queen Creek',
    'Apache Junction',
    'Gold Canyon',
    'Scottsdale',
  ], // VERIFY
};
