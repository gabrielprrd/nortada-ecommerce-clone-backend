const stripe = require('stripe')('sk_test_51Gy3UlDlCoBYeeqT84ennOF1BLFfcfDzatUQd0vkVXCALLGixdEA5br66x95FUmISrpV5OWaQYehHgQKEk4T662G00OBieljZ5');

describe('payment', () => {
  it('should authenticate with valid credentials', async () => {
    const payment = await stripe.paymentIntents.create({
      amount: 1000,
      currency: 'eur',
      payment_method_types: ['card'],
      receipt_email: 'jenny.rosen@example.com',
    });

    console.log(payment);

    expect(payment.amount).toBe(1000);
    expect(payment.currency).toBe('eur');
    expect(payment.payment_method_types).toStrictEqual(['card']);
    expect(payment.receipt_email).toBe('jenny.rosen@example.com');
  });
});
