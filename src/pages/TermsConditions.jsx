import React from 'react';
import {Link} from 'react-router-dom';

const TermsConditions = () => {
    return (
        <div className='container mx-auto px-6 py-3 mb-5 border-2 rounded-lg mt-5 border-gray-400 w-max mx-auto shadow-lg'>
            <p className='container mx-auto text-sm font-semibold'>
                <br />Terms and Conditions
<br />
                <br />Welcome to Test of Radhuni (the "Website"). By accessing or using the Website, you agree to be bound by these Terms and Conditions ("Terms").
<br />
                <br />Website Use and User Information
                <br />1.1. The Website is owned and operated by [Your Company Name], located at [Your Company Address].
                <br />1.2. The Website is intended for use by individuals over the age of 13. If you are under the age of 13, you may not use the Website.
                <br />1.3. In order to use certain features of the Website, you may be required to provide personal information such as your name, email address, username, and user photo. By providing this information, you agree to our Privacy Policy.
                <br />1.4. We may use digital analytics software to track usage of the Website for performance optimization and improvement purposes.
                <br />1.5. We do not display advertisements on the Website, but we may use retargeting for advertising purposes.
                <br />1.6. We may use Google Maps APIs, Cookies, Local Storage, and sessions to improve your experience on the Website.
                <br />1.7. We use Firebase Auth Provider to allow users to sign in to the Website using their Google, GitHub, or Facebook accounts.
<br />
                <br />User Communications
                <br />2.1. If you need to contact us, you can do so by email at nmfuad.bd2010@gmail.com, by phone at +8801819194110, or by visiting our About page at https://test-of-radhuni.web.app/about.
                <br />2.2. We may send emails or newsletters to users who have provided us with their email address. You can unsubscribe from these communications at any time.
<br />
                <br />Payment and Transactions
                <br />3.1. The Website does not accept payments online.
<br />
                <br />Intellectual Property Rights
                <br />4.1. The Website and its content, including but not limited to text, graphics, images, logos, and software, are the property of [Your Company Name] or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                <br />4.2. You may not use, reproduce, modify, or distribute any content from the Website without our prior written consent.
<br />
                <br />Disclaimer of Warranties and Limitation of Liability
                <br />5.1. The Website is provided on an "as is" and "as available" basis. We do not make any warranties, express or implied, regarding the Website or its content.
                <br />5.2. We will not be liable for any damages of any kind arising from the use of the Website, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
<br />
                <br />Indemnification
                <br />6.1. You agree to indemnify, defend, and hold harmless [Your Company Name], its officers, directors, employees, and agents from any and all claims, damages, and expenses (including reasonable attorneys' fees) arising out of or related to your use of the Website.
<br />
                <br />Governing Law and Jurisdiction
                <br />7.1. These Terms shall be governed by and construed in accordance with the laws of [Your Country or State]. Any dispute arising out of or in connection with these Terms shall be resolved by the courts of [Your Country or State].
<br />
                <br />Changes to Terms
                <br />8.1. We may modify these Terms at any time by posting the revised Terms on the Website. Your continued use of the Website after the posting of the revised Terms</p>
            

            <h1 className='text-center text-xl font-bold text-blue-900 px-6 py-3 mb-5 border-2 rounded-lg mt-5 border-gray-400 w-max mx-auto shadow-lg'>If you accept our Terms and Conditions then you can <span className='link-hover font-extrabold text-red-700 hover:text-blue-950'><Link to={'/register'}>Create an Id</Link></span> or <span className='link-hover font-extrabold text-red-700 hover:text-blue-950'><Link to={'/'}>go to Home Page</Link></span></h1>
        </div>
    );
};

export default TermsConditions;