import React from 'react';

const Faq = () => {
    return (
        
<div>
      <section class="text-gray-700 mb-6">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Frequently Asked Question
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The most common questions about how our Autism Care works and what
              can do for you.
            </p>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                Why can't I log in/ How do I create an account?
                </summary>

                <span>
                On our current website, you do not need to create an account to our resources. Simply explore our resources page and download our available PDFs.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                How do I get my certificate after completing the training?
                </summary>

                <span>
                Your AET Trainer should have sent you a link to a delegate form which you must complete in order to get your certificate. If you have not got this link, please get in touch with your AET Training Partner and request it.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                Can you offer any further support/ guidance to parents?
                </summary>

                <span>
                We work directly with educational professionals, local authorities and employers to support their good autism practice and give autistic people the best opportunities in their educational life. We are unable to help with these queries, but The National Autistic Society, our host company, has a number of Helplines which offer advice and support:
                </span>
              </details>
            </div>
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  How can i buy a course?
                </summary>

                <span class="px-4 py-2">
                 Please visit our all course and choose your course .Make sure you are stay with login.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                How do I access AET training modules and materials?
                </summary>

                <span class="px-4 py-2">
                All modules and materials can be accessed via SharePoint. Please contact your Team Administrator to get these. You can find the contact information for your Training Partner here:
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  How can I communicate with you?
                </summary>

                <span class="px-4 py-2">
                  please visit our contact us page.we will stay for you at 24/7 days and our support team will help you everything.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
};

export default Faq;