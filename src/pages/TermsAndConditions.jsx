import React from 'react';
import styles from '../styles/TermsAndConditions.module.css';

const TermsAndConditions = () => {
  return (
    <div className={styles.termsContainer}>
      <h1 className={styles.heading}>Terms and Conditions</h1>

      <h2 className={styles.subheading}>Initial Consultation Agreement</h2>
      <p>
        Booking a consultation constitutes acceptance of the Terms and Conditions which also serve as an initial consultation retainer with the RCIC and Client. Please read carefully and contact us if you have any questions.
      </p>
      <p>
        This Initial Consultation Agreement is made this day between Regulated Canadian Immigration Consultant (RCIC) Loveneet Kaur Paneswar (the "RCIC") Membership Number R522969 and yourself (the "Client") for the purpose of an initial consultation relating to Canadian Immigration.
      </p>
      <p>
        The Client is required to pay the booking fee as noted on the booking page.
      </p>
      <p>
        This Agreement shall be governed by the laws in effect in the Province of British Columbia and the federal laws of Canada applicable therein.
      </p>
      <p>
        Please be advised that our RCIC is a member in good standing of the College of Immigration and Citizenship Consultants (CICC) and as such is bound by its By-law Code of Professional Ethics and Regulations.
      </p>

      <h2 className={styles.subheading}>Purpose and Scope</h2>
      <p>
        The purpose and scope of the consultation are to provide the RCIC with sufficient information to allow for a full analysis and comprehensive advice on Canadian immigration options including estimated timeframes, application fees, and representation costs (where applicable).
      </p>

      <h2 className={styles.subheading}>Limits of Engagement</h2>
      <p>
        The services to be provided under this Agreement are limited to a single consultation on the matter described above. The RCIC shall not provide further information or advice to the Client unless a separate written agreement concerning those other matters has been entered into by Client and RCIC. This agreement does not obligate the RCIC to act for the Client in any application or proceedings.
      </p>

      <h2 className={styles.subheading}>Method of Consultation</h2>
      <p>
        Initial consultations are conducted via Zoom using the link provided in your booking confirmation email. If you do not receive this link, please email info@brightlightimmigration.ca. Consultations are for the allotted time only. If client concerns are addressed in less time, there will be no prorated credit or refund for unused time.
      </p>

      <h2 className={styles.subheading}>Reschedule or Missed Consultation</h2>
      <p>
        Should you need to reschedule your booked consultation, you must do so at least 24 hours before the scheduled appointment time by emailing info@brightlightimmigration.ca to request a new date. Consultations can only be rescheduled once. If you are more than 15 minutes late for your appointment, it will be automatically canceled without refund as fees are considered earned upon the scheduled appointment time.
      </p>

      <h2 className={styles.subheading}>Refund Policy</h2>
      <p>
        The client is only entitled to the refund of any fees that have not been earned under this agreement, less a 10% administrative charge. Fees are earned immediately on the date and time scheduled for the consultation and are non-refundable once earned.
      </p>

      <h2 className={styles.subheading}>Other Conditions</h2>
      <ul>
        <li>
          <strong>Client Responsibility:</strong> The Client is responsible for providing the RCIC with accurate and complete information necessary for the consultation. Failure to disclose relevant information may negatively affect the advice provided.
        </li>
        <li>
          <strong>Advice current on the date of consultation:</strong> The advice provided is based on Canadian immigration law and policy current on the date of the consultation.
        </li>
        <li>
          <strong>No guarantee on the outcome:</strong> RCIC provides consulting services but does not guarantee that they will help the Client meet their immigration goals.
        </li>
        <li>
          <strong>Confidentiality:</strong> The RCIC is required to preserve the confidentiality of the Client’s information, except as demanded by law.
        </li>
        <li>
          <strong>Applicable law:</strong> These terms and conditions are governed by the laws of British Columbia, Canada.
        </li>
      </ul>

      <p>
        By signing the agreement, you indicate your acceptance of the terms and conditions set forth in this Initial Consultation Agreement. Further engagement with the RCIC will require a separate written agreement.
      </p>
    </div>
  );
};

export default TermsAndConditions;
