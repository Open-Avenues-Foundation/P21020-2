const sanitizeEmails = customer => {
  // return an customer with the email
  // sanitized
  console.log(customer);
  const {email} = customer;
  // !~/
  //const customer = { email: 'test@hi.com', phone_n: '111'}
  //
  //  SPREAD OPERATOR
  // ...customer
  // email: 'test@hi.com', phone_n: '111'
  //
  //{}
  // {...customer, email: 'hi@test.com'}
  // email: 'test@hi.com', phone_n: '111'
  // {email: 'test@hi.com', phn: 111, email: 'hi@test.com'}
  // {email: 'hi@test.com', phn: 111}
  console.log('Custoomer email', email);
  console.log('Custoomer email replaced', email.replace(',', ''));

  const newEmail = email.replace(',', '');

  return {
    ...customer,
    email: newEmail,
  };
};

module.exports = sanitizeEmails;
