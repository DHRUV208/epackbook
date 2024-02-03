import { Fragment, useEffect } from 'react';
import Breadcumb from '../common-components/breadcumb';
import Header from '../common-components/header';
import Footer from '../common-components/footer';
import { Container, Grid, Typography } from '@mui/material';

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Header />
      <Breadcumb title="Refund Policy" />
      <Container sx={{ py: 5 }}>
        <Grid container spacing={4}>
          <Grid item md={12}>
            <Typography variant={'h4'} component={'h4'}>
              Refund policy ePackBook Subscriptions?
            </Typography>

            <Typography mt={3} variant={'body1'} component={'p'}>
              <b>ePackBook's Customer Satisfaction Policy</b> <br></br>
              At ePackBook we strive to create quality software that you enjoy using for your
              business or professional life. You have a number of choices and we appreciate you
              giving us your business. Thank You. We have created this policy that details what we
              will do should we fail to meet your expectations.
            </Typography>

            <Typography mt={3} variant={'body1'} component={'p'}>
              <b> Monthly Subscriptions.</b> If at any time during your <b>first 3 Days</b> using
              our service you are dissatisfied, please contact us. We will do our best to address
              your issue, provide a work around or give a timeline for a solution that will meet
              your needs. If you are not satisfied, we will gladly offer you a <b>FULL REFUND</b>{' '}
              for your purchase, and downgrade your account to the free plan for that service.
            </Typography>

            <Typography mt={3} variant={'body1'} component={'p'}>
              <b>Annual Subscriptions .</b> ePackBook doesn't force you into an annual subscription
              as a condition to use our services. We prefer to give you the flexibility to choose.
              In exchange for you signing up for an annual up-front commitment, we offer you a
              significant discount over the already-low monthly subscription cost. If at any time
              during your <b>first 7 days</b> using our service you are dissatisfied, please contact
              us. We will do our best to address your issue, provide a work around or give a
              timeline for a solution that will meet your needs. If you are not satisfied, we will
              gladly offer you a <b>FULL REFUND</b> for your purchase, and downgrade your account to
              the free plan.
            </Typography>

            <Typography mt={3} variant={'body1'} component={'p'}>
              We want you to be happy with our service throughout your entire contract, not only the
              first 15 days (in case of monthly subscription) and the first 7 days (in case of
              annual subscription). So we go beyond that. If at any time during your contract we
              remove, break or discontinue functionality that was available at the time you signed
              up for our services , we ask you to notify us immediately.
            </Typography>

            <Typography mt={3} variant={'body1'} component={'p'}>
              <b>Partial Downgrade of Annual Subscription.</b> There may be situations where you
              wish to partially downgrade your annual subscription. Partial downgrade occurs if,
              during your annual subscription period, you reduce the number of user licenses,
              downgrade the edition of our services, downgrade your paid support plan or remove an
              add-on that you had previously purchased. In case of partial downgrade of annual
              subscription, you will be provided credits in the form of extension of subscription
              for the active licenses. The discounts that were applied will be excluded for
              calculating the quantum of credits, i.e., the value for the un-used license = total
              amount paid - (monthly list price x number of months used).
            </Typography>

            <Typography mt={3} variant={'body1'} component={'p'}>
              <b>Auto-Renewal.</b> For your convenience, your monthly and yearly subscriptions will
              auto-renew until you cancel the service. Every time before your subscription
              auto-renews, we will send a mail specifying the amount that will be charged to your
              credit card. Similarly, after each renewal we will send you a receipt via e-mail
              specifying the amount that has been deducted together with the next renewal date and
              the next renewal amount.
            </Typography>

            <Typography mt={3} variant={'body1'} component={'p'}>
              We know that sometimes customers forget to cancel an account they no longer want until
              it has already been charged. That's why you can cancel your monthly/annual
              subscription <b>even five business days after your renewal date</b>, and we will still
              process your cancellation and give you a FULL REFUND . For questions, please e-mail{' '}
              <b>info@epackbook.in</b>
            </Typography>

            <Typography mt={3} variant={'body1'} component={'p'}>
              <b>Exception to our Refund Policy</b> <br></br>
              Please note that we will not entertain a request for refund (FULL or PRO-RATED) when
              we have suspended or terminated your access to ePackBook Services due to a violation
              of our <b>Terms of Service</b>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default RefundPolicy;
